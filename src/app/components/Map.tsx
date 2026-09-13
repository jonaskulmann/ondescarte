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