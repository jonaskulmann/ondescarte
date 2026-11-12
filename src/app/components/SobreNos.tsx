const marcos = [
  {
    titulo: "O primeiro teste",
    texto:
      "Tudo começou com um protótipo simples, só pra provar que o site conseguia conversar com um servidor.",
  },
  {
    titulo: "Uma base mais firme",
    texto:
      "Reconstruímos o site em Next.js e TypeScript, pensando em crescer sem virar bagunça.",
  },
  {
    titulo: "O mapa de Porto Alegre",
    texto:
      "Com Leaflet e OpenStreetMap, o mapa ficou preso à cidade, com pins e uma caixa que mostra o que cada ponto aceita.",
  },
  {
    titulo: "Pontos de verdade",
    texto:
      "Com a ajuda de um amigo, a busca passou a consultar um banco de dados e trazer os pontos mais próximos de cada endereço.",
  },
]

const equipe = [
  {
    nome: "Gustavo",
    papel: "Site, mapa e visual",
    detalhe: "Estudante de Desenvolvimento Full Stack na +PraTi, em Porto Alegre.",
  },
  {
    nome: "Nome do seu amigo",
    papel: "Busca e banco de dados",
    detalhe: "Criou a busca de pontos próximos que roda no Supabase.",
  },
]

export default function SobreNos() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-teal-900 px-4 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-widest text-emerald-300">
              SOBRE NÓS
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Descartar certo não deveria dar trabalho
            </h2>
            <p className="mt-6 text-lg text-emerald-50/80">
              A OnDescarte nasceu de uma pergunta simples: onde eu levo isso? Os pontos de coleta existem, mas achar o mais perto de casa nem sempre é fácil.
            </p>
            <p className="mt-4 text-lg text-emerald-50/80">
              Por isso juntamos tudo num mapa só, feito pra Porto Alegre, que diz onde ir e o que cada ponto aceita.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-emerald-300">
              COMO CHEGAMOS AQUI
            </p>
            <ol className="mt-6 space-y-10 border-l border-emerald-700 pl-8">
              {marcos.map((marco) => (
                <li key={marco.titulo} className="relative">
                  <span className="absolute -left-9.75 top-1.5 h-3 w-3 rounded-full bg-emerald-300 ring-4 ring-teal-900" />
                  <h3 className="text-xl font-bold">{marco.titulo}</h3>
                  <p className="mt-1 text-emerald-50/80">{marco.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-xs font-semibold tracking-widest text-emerald-300">QUEM FAZ</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {equipe.map((pessoa) => (
              <div key={pessoa.nome} className="rounded-2xl bg-teal-800 p-6">
                <p className="text-xl font-bold">{pessoa.nome}</p>
                <p className="mt-1 text-sm font-semibold text-emerald-300">{pessoa.papel}</p>
                <p className="mt-3 text-emerald-50/80">{pessoa.detalhe}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}