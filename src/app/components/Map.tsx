"use client"

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { pontosColeta } from "../data/pontos"

type Ponto = {
  lat: number
  lon: number
}

type MapaProps = {
  pontoBuscado: Ponto | null
}

const iconePadrao = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
})

function MoverMapa({ ponto }: { ponto: Ponto | null }) {
  const mapa = useMap()

  useEffect(() => {
    if (ponto) {
      mapa.flyTo([ponto.lat, ponto.lon], 15)
    }
  }, [ponto, mapa])

  return null
}

export default function Mapa({ pontoBuscado }: MapaProps) {
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
      {pontosColeta.map((ponto) => (
        <Marker
          key={ponto.id}
          position={[ponto.lat, ponto.lon]}
          icon={iconePadrao}
        />
      ))}
    </MapContainer>
  )
}