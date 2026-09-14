"use client"

import dynamic from "next/dynamic"

const Mapa = dynamic(() => import("./Map"), { ssr: false })

type Ponto = {
  lat: number
  lon: number
}

type MapSectionProps = {
  pontoBuscado: Ponto | null
}

export default function MapSection({ pontoBuscado }: MapSectionProps) {
  return (
    <section style={{ padding: "48px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
        Pontos de coleta em Porto Alegre
      </h2>
      <Mapa pontoBuscado={pontoBuscado} />
    </section>
  )
}