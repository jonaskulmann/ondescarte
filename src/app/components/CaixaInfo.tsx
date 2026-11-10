import { PontoColeta } from "../tipos"

type CaixaInfoProps = {
  ponto: PontoColeta | null
}

export default function CaixaInfo({ ponto }: CaixaInfoProps) {
  const visivel = ponto !== null

  return (
    <div
      className={`absolute top-4 right-4 left-4 md:left-auto md:w-72 z-1000 bg-white rounded-2xl shadow-md p-5 transition-all duration-700 ease-out ${
        visivel
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10 pointer-events-none"
      }`}
    >
      {ponto && (
        <>
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
        </>
      )}
    </div>
  )
}