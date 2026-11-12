"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import MapSection from "./components/MapSection"
import { PontoColeta, converterPonto } from "./tipos"
import { buscarPontosProximos } from "./actions/pontos"
import ComoFunciona from "./components/ComoFunciona"
import Categorias from "./components/Categorias"

type Ponto = {
  lat: number
  lon: number
}

function estaEmPortoAlegre(ponto: Ponto) {
  return (
    ponto.lat >= -30.28 &&
    ponto.lat <= -29.92 &&
    ponto.lon >= -51.3 &&
    ponto.lon <= -51.01
  )
}

export default function Home() {
  const [endereco, setEndereco] = useState("")
  const [pontoBuscado, setPontoBuscado] = useState<Ponto | null>(null)
  const [pontos, setPontos] = useState<PontoColeta[]>([])

  async function handleBuscarPontos() {
    const resultado = await buscarPontosProximos(endereco)

    if (!resultado.origem) {
      alert(resultado.erro)
      return
    }

    if (!estaEmPortoAlegre(resultado.origem)) {
      alert("Esse endereço fica fora de Porto Alegre")
      return
    }

    setPontoBuscado(resultado.origem)
    setPontos(resultado.pontos.map(converterPonto))

    if (resultado.erro) {
      alert(resultado.erro)
    }
  }

  return (
    <main>
      <section
        id="localizar"
        className="scroll-mt-20 bg-gray-100 flex flex-col items-center gap-4 px-4 pt-16 pb-24"
      >
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

        <hr className="w-full max-w-6xl mx-auto my-6 border-gray-300" />

        <div className="w-full max-w-6xl mx-auto">
          <MapSection pontoBuscado={pontoBuscado} pontos={pontos} />
        </div>
      </section>
            <ComoFunciona />
                  <Categorias />
    </main>
  )
}