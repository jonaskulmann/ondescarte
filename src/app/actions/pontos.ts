'use server'

import { createServerClient } from '@/lib/supabase/server'
import { getGeocodificarEndereco } from './geocoding'

const RAIO_KM = 15

export async function buscarPontosProximos(endereco: string) {
  const origem = await getGeocodificarEndereco(endereco)

  if (!origem) {
    return { erro: 'Endereço não encontrado.', origem: null, pontos: [] }
  }

  const supabase = createServerClient()

  const { data, error } = await supabase.rpc('pontos_proximos', {
    user_lat: origem.lat,
    user_lon: origem.lon,
    max_results: 10,
    raio_km: RAIO_KM,
  })

  if (error || !data) {
    console.error(error)
    if (error?.message === 'TypeError: fetch failed' && error?.details.includes('Caused by: Error: getaddrinfo ENOTFOUND')) {
      return {
        erro: 'Não foi possível conectar ao servidor de banco de dados. Por favor, tente novamente mais tarde.',
        origem,
        pontos: [],
      }
    }
    else {
      return { erro: error, origem, pontos: [] }
    }

  }

  if (data.length === 0) {
    return {
      erro: `Nenhum ponto de coleta encontrado em até ${RAIO_KM} km.`,
      origem,
      pontos: [],
    }
  }

  return { erro: null, origem, pontos: data }
}