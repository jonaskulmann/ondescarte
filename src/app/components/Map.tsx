"use client"

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import { useEffect } from "react"
import "leaflet/dist/leaflet.css"
import { pontosColeta, PontoColeta } from "../data/pontos"

type Ponto = {
  lat: number
  lon: number
}

type MapaProps = {
  pontoBuscado: Ponto | null
  pontoSelecionado: PontoColeta | null
  aoSelecionar: (ponto: PontoColeta) => void
}

function MoverMapa({ ponto }: { ponto: Ponto | null }) {
  const mapa = useMap()

  useEffect(() => {
    if (ponto) {
      mapa.flyTo([ponto.lat, ponto.lon], 15)
    }
  }, [ponto, mapa])

  return null
}

export default function Mapa({ pontoBuscado, pontoSelecionado, aoSelecionar }: MapaProps) {
  return (
    <MapContainer
      center={[-30.0346, -51.2177]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <MoverMapa ponto={pontoBuscado} />
      <MoverMapa ponto={pontoSelecionado} />
      {pontosColeta.map((ponto) => (
        <Marker
          key={ponto.id}
          position={[ponto.lat, ponto.lon]}
          eventHandlers={{ click: () => aoSelecionar(ponto) }}
        />
      ))}
    </MapContainer>
  )
}