"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
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

export default function Mapa() {
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
    </MapContainer>
  )
}