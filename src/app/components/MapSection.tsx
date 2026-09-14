"use client"

import dynamic from "next/dynamic"

const Mapa = dynamic(() => import("./Map"), { ssr: false })

export default function MapSection() {
  return (
    <section style={{ padding: "48px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
        Pontos de coleta em Porto Alegre
      </h2>
      <Mapa />
    </section>
  )
}