export type PontoColeta = {
  id: string
  nome: string
  descricao: string
  endereco: string
  lat: number
  lon: number
  distanciaKm: number
  tipos: string[]
}

type LinhaPonto = {
  id: string
  name: string
  description: string | null
  address: string | null
  materiais: string | null
  lat: number
  lon: number
  distancia_km: number
}

function separarMateriais(texto: string | null): string[] {
  if (!texto) {
    return []
  }

  return texto
    .split(/[,;|]/)
    .map((item) => item.trim())
    .filter((item) => item !== "")
}

export function converterPonto(linha: LinhaPonto): PontoColeta {
  return {
    id: linha.id,
    nome: linha.name,
    descricao: linha.description ?? "",
    endereco: linha.address ?? "",
    lat: linha.lat,
    lon: linha.lon,
    distanciaKm: linha.distancia_km,
    tipos: separarMateriais(linha.materiais),
  }
}