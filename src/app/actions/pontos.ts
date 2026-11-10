'use server'

import { createServerClient } from '@/lib/supabase/server'
import { getGeocodificarEndereco } from './geocoding'

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
  })

  if (error || !data) {
    console.error(error)
    return { erro: 'Erro ao buscar pontos.', origem, pontos: [] }
  }

  return { erro: null, origem, pontos: data }
}