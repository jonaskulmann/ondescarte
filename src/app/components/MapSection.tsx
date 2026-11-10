"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import CaixaInfo from "./CaixaInfo"
import { PontoColeta } from "../data/pontos"

const Mapa = dynamic(() => import("./Map"), { ssr: false })

type Ponto = {
  lat: number
  lon: number
}

type MapSectionProps = {
  pontoBuscado: Ponto | null
}

export default function MapSection({ pontoBuscado }: MapSectionProps) {
  const [pontoSelecionado, setPontoSelecionado] = useState<PontoColeta | null>(null)

  return (
    <section style={{ padding: "48px 0" }}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 min-w-0">
          <Mapa
            pontoBuscado={pontoBuscado}
            pontoSelecionado={pontoSelecionado}
            aoSelecionar={setPontoSelecionado}
          />
        </div>
        <CaixaInfo ponto={pontoSelecionado} />
      </div>
    </section>
  )
}