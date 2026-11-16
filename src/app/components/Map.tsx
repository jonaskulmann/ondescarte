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

function criarIcone(cor: string, tamanho: number) {
  return L.divIcon({
    className: "",
    html: `<svg viewBox="0 0 24 24" width="${tamanho}" height="${tamanho}" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"
            fill="${cor}" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="12" cy="9" r="2.5" fill="#ffffff"/>
    </svg>`,
    iconSize: [tamanho, tamanho],
    iconAnchor: [tamanho / 2, tamanho],
  })
}

const iconeSelecionado = criarIcone("#dc2626", 44) 
const iconeNormal = criarIcone("#16a34a", 32)

const limitesPortoAlegre: L.LatLngBoundsExpression = [
  [-30.28, -51.3],
  [-29.92, -51.01],
]

type MapaProps = {
  destino: Ponto | null
  pontos: PontoColeta[]
  selecionadoId: string | null
  aoSelecionar: (ponto: PontoColeta) => void
}

function MoverMapa({ destino }: { destino: Ponto | null }) {
  const mapa = useMap()

  useEffect(() => {
    if (destino) {
      mapa.flyTo([destino.lat, destino.lon], 16)
    }
  }, [destino, mapa])

  return null
}

export default function Mapa({ destino, pontos, selecionadoId, aoSelecionar }: MapaProps) {
  return (
      <MapContainer
        center={[-30.0346, -51.2177]}
        zoom={13}
        minZoom={11}
        maxBounds={limitesPortoAlegre}
        maxBoundsViscosity={1.0}
        style={{
        height: "500px",
        width: "100%",
        borderRadius: "24px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <MoverMapa destino={destino} />
      {pontos.map((ponto) => {
        const selecionado = ponto.id === selecionadoId
        return (
          <Marker
            key={ponto.id}
            position={[ponto.lat, ponto.lon]}
            icon={selecionado ? iconeSelecionado : iconeNormal}
            zIndexOffset={selecionado ? 1000 : 0}
            eventHandlers={{ click: () => aoSelecionar(ponto) }}
          />
        )
      })}
    </MapContainer>
  )
}