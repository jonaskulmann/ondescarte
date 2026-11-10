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

function acharMaisProximo(lista: PontoColeta[]): PontoColeta {
  let maisProximo = lista[0]

  lista.forEach((ponto) => {
    if (ponto.distanciaKm < maisProximo.distanciaKm) {
      maisProximo = ponto
    }
  })

  return maisProximo
}

export default function MapSection({ pontoBuscado, pontos }: MapSectionProps) {
  const [pontoSelecionado, setPontoSelecionado] = useState<PontoColeta | null>(null)
  const [alvoMapa, setAlvoMapa] = useState<Ponto | null>(null)

  useEffect(() => {
    if (!pontoBuscado) {
      return
    }

    if (pontos.length > 0) {
      const maisProximo = acharMaisProximo(pontos)
      setPontoSelecionado(maisProximo)
      setAlvoMapa(maisProximo)
    } else {
      setPontoSelecionado(null)
      setAlvoMapa(pontoBuscado)
    }
  }, [pontoBuscado, pontos])

  return (
    <section style={{ padding: "48px 0" }}>
      <div className="relative">
        <Mapa
          alvo={alvoMapa}
          pontos={pontos}
          aoSelecionar={setPontoSelecionado}
        />
        <CaixaInfo ponto={pontoSelecionado} />
      </div>
    </section>
  )
}