"use client"

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { pontosColeta, PontoColeta } from "../data/pontos"

type Ponto = {
  lat: number
  lon: number
}

type MapaProps = {
  pontoBuscado: Ponto | null
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

function MoverMapa({ ponto }: { ponto: Ponto | null }) {
  const mapa = useMap()

  useEffect(() => {
    if (ponto) {
      mapa.flyTo([ponto.lat, ponto.lon], 15)
    }
  }, [ponto, mapa])

  return null
}

export default function Mapa({ pontoBuscado, aoSelecionar }: MapaProps) {
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
      <MoverMapa ponto={pontoBuscado} />
      {pontosColeta.map((ponto) => (
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