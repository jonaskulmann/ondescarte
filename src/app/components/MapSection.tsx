"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import CaixaInfo from "./CaixaInfo"
import { PontoColeta, pontosColeta } from "../data/pontos"

const Mapa = dynamic(() => import("./Map"), { ssr: false })

type Ponto = {
  lat: number
  lon: number
}

type MapSectionProps = {
  pontoBuscado: Ponto | null
}

function acharMaisProximo(busca: Ponto): PontoColeta {
  let maisProximo = pontosColeta[0]
  let menorDistancia = Infinity

  pontosColeta.forEach((ponto) => {
    const distancia = Math.hypot(ponto.lat - busca.lat, ponto.lon - busca.lon)

    if (distancia < menorDistancia) {
      menorDistancia = distancia
      maisProximo = ponto
    }
  })

  return maisProximo
}

export default function MapSection({ pontoBuscado }: MapSectionProps) {
  const [pontoSelecionado, setPontoSelecionado] = useState<PontoColeta | null>(null)

  useEffect(() => {
    if (pontoBuscado) {
      setPontoSelecionado(acharMaisProximo(pontoBuscado))
    }
  }, [pontoBuscado])

  return (
    <section style={{ padding: "48px 0" }}>
      <div className="relative">
        <Mapa pontoBuscado={pontoBuscado} aoSelecionar={setPontoSelecionado} />
        <CaixaInfo ponto={pontoSelecionado} />
      </div>
    </section>
  )
}