export type PontoColeta = {
  id: number | string
  nome: string
  bairro: string
  lat: number
  lon: number
  tipos: string[]
}

type LinhaPonto = {
  id: number | string
  nome: string
  bairro?: string
  lat?: number
  lon?: number
  latitude?: number
  longitude?: number
  tipos?: string[]
}

export function converterPonto(linha: LinhaPonto): PontoColeta {
  return {
    id: linha.id,
    nome: linha.nome,
    bairro: linha.bairro ?? "Bairro não informado",
    lat: linha.lat ?? linha.latitude ?? 0,
    lon: linha.lon ?? linha.longitude ?? 0,
    tipos: linha.tipos ?? [],
  }
}