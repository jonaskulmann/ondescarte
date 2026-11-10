"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import CaixaInfo from "./CaixaInfo"
import { PontoColeta } from "../tipos"

const Mapa = dynamic(() => import("./Map"), { ssr: false })

type Ponto = {
  lat: number
  lon: number
}

type MapSectionProps = {
  pontoBuscado: Ponto | null
  pontos: PontoColeta[]
}

function acharMaisProximo(busca: Ponto, lista: PontoColeta[]): PontoColeta {
  let maisProximo = lista[0]
  let menorDistancia = Infinity

  lista.forEach((ponto) => {
    const distancia = Math.hypot(ponto.lat - busca.lat, ponto.lon - busca.lon)

    if (distancia < menorDistancia) {
      menorDistancia = distancia
      maisProximo = ponto
    }
  })

  return maisProximo
}

export default function MapSection({ pontoBuscado, pontos }: MapSectionProps) {
  const [pontoSelecionado, setPontoSelecionado] = useState<PontoColeta | null>(null)

  useEffect(() => {
    if (pontoBuscado) {
      setPontoSelecionado(pontos.length > 0 ? acharMaisProximo(pontoBuscado, pontos) : null)
    }
  }, [pontoBuscado, pontos])

  return (
    <section style={{ padding: "48px 0" }}>
      <div className="relative">
        <Mapa
          pontoBuscado={pontoBuscado}
          pontos={pontos}
          aoSelecionar={setPontoSelecionado}
        />
        <CaixaInfo ponto={pontoSelecionado} />
      </div>
    </section>
  )
}