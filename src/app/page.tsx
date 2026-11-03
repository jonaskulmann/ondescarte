"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import MapSection from "./components/MapSection"
import { getGeocodificarEndereco } from "./actions/geocoding"

type Ponto = {
  lat: number
  lon: number
}

export default function Home() {
  const [endereco, setEndereco] = useState("")
  const [pontoBuscado, setPontoBuscado] = useState<Ponto | null>(null)

  async function handleBuscarPontos() {
    const resultado = await getGeocodificarEndereco(endereco)

    if (!resultado) {
      alert("Endereço não encontrado")
      return
    }

    setPontoBuscado(resultado)
  }

  return (
     <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 px-4 pt-16">

      <div className="inline-block rounded-full border border-emerald-600 px-4 py-1.5 text-emerald-700 text-[11px] font-semibold tracking-widest">
        DESCARTE CONSCIENTE EM SEU BAIRRO
      </div>

      <h1 className="font-bold text-teal-900 text-center leading-tight">
        <span className="block text-6xl md:text-7xl">Encontre pontos de coleta</span>
        <span className="block text-6xl md:text-7xl">de reciclagem perto de você!</span>
      </h1>

      <p className="text-center text-gray-500 text-lg max-w-2xl mt-4">
        <span className="block">A OnDescarte conecta cidadãos aos pontos autorizados de coleta em Porto Alegre.</span>
        <span className="block">Descarte plástico, vidro, papel, eletrônicos e óleo de forma correta e sem complicações.</span>
      </p>

      <div className="flex items-center bg-white rounded-full shadow-md p-2 max-w-xl w-full">
        <MapPin className="text-emerald-700 ml-2" size={20} />
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          placeholder="Digite seu endereço ou CEP (ex: Moinhos de Vento, RS)"
          className="flex-1 outline-none px-3 text-sm text-gray-700 placeholder-gray-400"
        />
        <button
          onClick={handleBuscarPontos}
          className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Buscar Pontos
        </button>
      </div>
       
      <hr className="w-full max-w-6xl mx-auto my-10 border-gray-300" />
      
      <div className="w-full max-w-4xl mx-auto">
      <MapSection pontoBuscado={pontoBuscado} />
      </div>

    </main>
  );
}