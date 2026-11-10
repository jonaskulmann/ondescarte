import { PontoColeta } from "../data/pontos"

type CaixaInfoProps = {
  ponto: PontoColeta | null
}

export default function CaixaInfo({ ponto }: CaixaInfoProps) {
  if (!ponto) {
    return (
      <div className="w-full md:w-72 bg-white rounded-2xl shadow-md p-5 h-fit">
        <p className="text-sm text-gray-500">
          Clique em um ponto no mapa para ver os detalhes.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full md:w-72 bg-white rounded-2xl shadow-md p-5 h-fit">
      <h3 className="text-lg font-semibold text-emerald-800">{ponto.nome}</h3>
      <p className="text-sm text-gray-500 mt-1">{ponto.bairro}, Porto Alegre</p>
      <p className="text-xs text-gray-400 mt-4 mb-2">Aceita</p>
      <div className="flex flex-wrap gap-2">
        {ponto.tipos.map((tipo) => (
          <span
            key={tipo}
            className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tipo}
          </span>
        ))}
      </div>
    </div>
  )
}