import { ArrowRight } from "lucide-react"

type Passo = {
  numero: string
  titulo: string
  texto: string
  mostraExemplo?: boolean
}

const passos: Passo[] = [
  {
    numero: "01",
    titulo: "Diga onde você está",
    texto:
      "Escreva seu endereço ou CEP na busca, lá no começo da página. Por enquanto atendemos só Porto Alegre, e o mapa não sai dos limites da cidade.",
  },
  {
    numero: "02",
    titulo: "Veja o ponto mais perto",
    texto:
      "O mapa voa até o ponto de coleta mais próximo e abre uma caixa com o nome, o endereço, os materiais que ele aceita e a distância até você.",
    mostraExemplo: true,
  },
  {
    numero: "03",
    titulo: "Separe e leve",
    texto:
      "Confira na caixa o que o ponto aceita, enxágue as embalagens e leve o material. Na dúvida sobre o que pode ou não, a seção de categorias logo abaixo tira a dúvida.",
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-white px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <p className="text-[11px] font-semibold tracking-widest text-emerald-700">
              COMO FUNCIONA
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-teal-900 md:text-5xl">
              Do seu endereço ao ponto de coleta em três passos
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Sem cadastro e sem complicação. Você digita, o mapa mostra e você leva.
            </p>
            <a
              href="#localizar"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
            >
              Fazer uma busca
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <ol className="md:col-span-7">
          {passos.map((passo) => (
            <li
              key={passo.numero}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-gray-200 py-10 first:border-t-0 first:pt-0"
            >
              <span className="text-5xl font-bold tabular-nums text-emerald-700">
                {passo.numero}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-teal-900">{passo.titulo}</h3>
                <p className="mt-2 text-gray-600">{passo.texto}</p>

                {passo.mostraExemplo && (
                  <div className="mt-6 max-w-xs rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400">
                      EXEMPLO
                    </p>
                    <p className="mt-2 text-lg font-semibold text-emerald-800">
                      Ecoponto do Bairro
                    </p>
                    <p className="text-sm text-gray-500">Rua Exemplo, 123</p>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Plástico
                      </span>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Vidro
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-gray-400">
                      A 0,4 km do endereço buscado
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}