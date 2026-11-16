"use client"

import { useState } from "react"
import { Check, X, Lightbulb } from "lucide-react"

type Categoria = {
  id: string
  nome: string
  cor: string
  pode: string[]
  naoPode: string[]
  dica: string
}

const categorias: Categoria[] = [
  {
    id: "plastico",
    nome: "Plástico",
    cor: "bg-red-500",
    pode: [
      "Garrafas PET e potes",
      "Embalagens de produtos de limpeza",
      "Sacolas plásticas limpas e secas",
      "Tampinhas",
    ],
    naoPode: [
      "Embalagens com restos de comida",
      "Fraldas, absorventes e lenços usados",
      "Brinquedos com pilha ou parte eletrônica",
    ],
    dica: "Basta um enxágue rápido e escorrer. Não precisa ficar impecável, só tirar o grosso. Amasse pra ocupar menos espaço.",
  },
  {
    id: "papel",
    nome: "Papel",
    cor: "bg-blue-500",
    pode: [
      "Jornais, revistas e folhetos",
      "Caixas de papelão desmontadas",
      "Folhas de caderno e de impressora",
      "Envelopes e embalagens de papel",
    ],
    naoPode: [
      "Papel engordurado, como caixa de pizza suja",
      "Papel higiênico, guardanapo e papel toalha usados",
      "Papel plastificado, carbono ou adesivado",
    ],
    dica: "O inimigo do papel é a umidade e a gordura. Guarde seco e separado dos outros materiais.",
  },
  {
    id: "vidro",
    nome: "Vidro",
    cor: "bg-green-500",
    pode: [
      "Garrafas de bebida",
      "Potes de conserva e de alimentos",
      "Frascos de perfume e de cosméticos vazios",
    ],
    naoPode: [
      "Espelhos e vidros de janela",
      "Louça, cerâmica e porcelana",
      "Lâmpadas e vidros temperados, como o de forno",
    ],
    dica: "Se quebrar, embrulhe os cacos em jornal ou papelão e escreva \"vidro\" por fora. Isso protege quem faz a triagem.",
  },
  {
    id: "metal",
    nome: "Metal",
    cor: "bg-yellow-400",
    pode: [
      "Latas de refrigerante, cerveja e conserva",
      "Tampas de metal de potes e garrafas",
      "Panelas e utensílios velhos",
      "Papel alumínio limpo, amassado em bolinha",
    ],
    naoPode: [
      "Latas de tinta, solvente ou verniz",
      "Aerossóis com conteúdo",
      "Pilhas e baterias",
    ],
    dica: "Enxágue as latas e amasse. Alumínio é um dos materiais mais valorizados na reciclagem, vale muito a pena separar.",
  },
  {
    id: "eletronicos",
    nome: "Eletrônicos",
    cor: "bg-orange-500",
    pode: [
      "Celulares, carregadores e cabos",
      "Teclados, mouses e controles",
      "Pequenos eletrodomésticos",
      "Pilhas e baterias, nos pontos que aceitam",
    ],
    naoPode: [
      "Lixo comum e coleta seletiva do bairro",
      "Baterias estufadas ou vazando, sem avisar o ponto antes",
    ],
    dica: "Eletrônicos têm metais pesados que contaminam o solo. Apague seus dados antes de entregar celulares e computadores.",
  },
  {
    id: "oleo",
    nome: "Óleo de cozinha",
    cor: "bg-amber-800",
    pode: [
      "Óleo de fritura usado, já frio",
      "Óleo de cozinha vencido ou que sobrou",
    ],
    naoPode: [
      "Jogar na pia, no ralo ou no vaso",
      "Óleo de motor ou lubrificante",
      "Misturar com água ou detergente",
    ],
    dica: "Coe pra tirar os restos de comida e guarde numa garrafa PET bem fechada. Quando encher, é só levar a um ponto.",
  },
]

export default function Categorias() {
  const [ativaId, setAtivaId] = useState(categorias[0].id)
  const ativa = categorias.find((categoria) => categoria.id === ativaId) ?? categorias[0]

  return (
    <section id="categorias" className="scroll-mt-20 bg-gray-100 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-widest text-emerald-700">
            CATEGORIAS
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-teal-900 md:text-5xl">
            O que entra e o que fica de fora
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Escolha um material e veja o que pode ir, o que não pode e uma dica pra separar direito.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[260px_1fr]">
          <div className="flex min-w-0 gap-2 overflow-x-auto pb-2 md:flex-col md:pb-0">
            {categorias.map((categoria) => {
              const selecionada = categoria.id === ativa.id

              return (
                <button
                  key={categoria.id}
                  onClick={() => setAtivaId(categoria.id)}
                  aria-pressed={selecionada}
                  className={`flex shrink-0 items-center gap-3 rounded-full px-5 py-3 text-left text-sm font-semibold transition-colors md:rounded-2xl ${
                    selecionada
                      ? "bg-teal-900 text-white"
                      : "bg-white text-gray-700 hover:bg-emerald-50"
                  }`}
                >
                  <span className={`h-3 w-3 rounded-full ${categoria.cor}`} />
                  {categoria.nome}
                </button>
              )
            })}
          </div>

          <div
            key={ativa.id}
            className="animar-entrada min-w-0 rounded-3xl bg-white p-8 shadow-sm md:p-10"
          >
            <div className="flex items-center gap-3">
              <span className={`h-4 w-4 rounded-full ${ativa.cor}`} />
              <h3 className="text-2xl font-bold text-teal-900">{ativa.nome}</h3>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-widest text-emerald-700">PODE</p>
                <ul className="mt-4 space-y-3">
                  {ativa.pode.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-700">
                      <Check size={18} className="mt-1 shrink-0 text-emerald-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest text-red-700">NÃO PODE</p>
                <ul className="mt-4 space-y-3">
                  {ativa.naoPode.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-700">
                      <X size={18} className="mt-1 shrink-0 text-red-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex gap-3 rounded-2xl bg-emerald-50 p-5 text-sm text-emerald-900">
              <Lightbulb size={18} className="mt-0.5 shrink-0" />
              <p>{ativa.dica}</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          As regras mudam um pouco de ponto pra ponto. Confira sempre o que o ponto aceita na caixa que aparece no mapa.
        </p>
      </div>
    </section>
  )
}