"use client"

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { PontoColeta } from "../tipos"

type Ponto = {
  lat: number
  lon: number
}

type MapaProps = {
  alvo: Ponto | null
  pontos: PontoColeta[]
  aoSelecionar: (ponto: PontoColeta) => void
}

const iconePadrao = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
})

const limitesPortoAlegre: L.LatLngBoundsExpression = [
  [-30.28, -51.3],
  [-29.92, -51.01],
]

function MoverMapa({ alvo }: { alvo: Ponto | null }) {
  const mapa = useMap()

  useEffect(() => {
    if (alvo) {
      mapa.flyTo([alvo.lat, alvo.lon], 18, { duration: 1.5 })
    }
  }, [alvo, mapa])

  return null
}

export default function Mapa({ alvo, pontos, aoSelecionar }: MapaProps) {
  return (
    <MapContainer
      center={[-30.0346, -51.2177]}
      zoom={13}
      minZoom={11}
      maxBounds={limitesPortoAlegre}
      maxBoundsViscosity={1.0}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <MoverMapa alvo={alvo} />
      {pontos.map((ponto) => (
        <Marker
          key={ponto.id}
          position={[ponto.lat, ponto.lon]}
          icon={iconePadrao}
          eventHandlers={{ click: () => aoSelecionar(ponto) }}
        />
      ))}
    </MapContainer>
  )
}