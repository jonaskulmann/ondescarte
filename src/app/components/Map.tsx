"use client"

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const limitesPortoAlegre: [[number, number], [number, number]] = [
  [-30.27, -51.30],
  [-29.93, -51.02],
]

const centroPortoAlegre: [number, number] = [-30.0346, -51.2177]

type Ponto = {
  lat: number
  lon: number
}

type MapaProps = {
  pontoBuscado: Ponto | null
}

function RecenterMap({ pontoBuscado }: { pontoBuscado: Ponto | null }) {
  const map = useMap()

  if (pontoBuscado) {
    map.setView([pontoBuscado.lat, pontoBuscado.lon], 15)
  }

  return null
}

export default function Mapa({ pontoBuscado }: MapaProps) {
  return (
    <MapContainer
      center={centroPortoAlegre}
      zoom={13}
      minZoom={12}
      maxBounds={limitesPortoAlegre}
      maxBoundsViscosity={1.0}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={centroPortoAlegre} icon={icon}>
        <Popup>Porto Alegre</Popup>
      </Marker>

      {pontoBuscado && (
        <Marker position={[pontoBuscado.lat, pontoBuscado.lon]} icon={icon}>
          <Popup>Endereço buscado</Popup>
        </Marker>
      )}

      <RecenterMap pontoBuscado={pontoBuscado} />
    </MapContainer>
  )
}