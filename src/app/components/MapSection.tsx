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
      <Mapa pontoBuscado={pontoBuscado} />
    </section>
  )
}