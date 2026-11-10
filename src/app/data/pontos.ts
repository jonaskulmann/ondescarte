export type PontoColeta = {
  id: number | string
  nome: string
  bairro: string
  lat: number
  lon: number
  tipos: string[]
}

export const pontosColeta: PontoColeta[] = [
  { id: 1, nome: "Ecoponto Moinhos de Vento", bairro: "Moinhos de Vento", lat: -30.0246, lon: -51.2, tipos: ["Plástico", "Papel"] },
  { id: 2, nome: "Ponto Cidade Baixa", bairro: "Cidade Baixa", lat: -30.042, lon: -51.22, tipos: ["Vidro", "Metal"] },
  { id: 3, nome: "Ecoponto Bom Fim", bairro: "Bom Fim", lat: -30.033, lon: -51.211, tipos: ["Eletrônicos"] },
  { id: 4, nome: "Ponto Menino Deus", bairro: "Menino Deus", lat: -30.052, lon: -51.22, tipos: ["Plástico", "Metal"] },
  { id: 5, nome: "Ecoponto Petrópolis", bairro: "Petrópolis", lat: -30.045, lon: -51.185, tipos: ["Papel", "Vidro"] },
  { id: 6, nome: "Ponto Santana", bairro: "Santana", lat: -30.04, lon: -51.213, tipos: ["Óleo de cozinha"] },
  { id: 7, nome: "Ecoponto Azenha", bairro: "Azenha", lat: -30.056, lon: -51.215, tipos: ["Plástico"] },
  { id: 8, nome: "Ponto Floresta", bairro: "Floresta", lat: -30.022, lon: -51.208, tipos: ["Metal", "Eletrônicos"] },
  { id: 9, nome: "Ecoponto Bela Vista", bairro: "Bela Vista", lat: -30.04, lon: -51.19, tipos: ["Vidro", "Papel"] },
  { id: 10, nome: "Ponto Praia de Belas", bairro: "Praia de Belas", lat: -30.048, lon: -51.23, tipos: ["Plástico", "Óleo de cozinha"] },
]

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