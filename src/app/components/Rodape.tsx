const links = [
  { texto: "Localizar Pontos", destino: "#localizar" },
  { texto: "Como Funciona", destino: "#como-funciona" },
  { texto: "Categorias", destino: "#categorias" },
  { texto: "Sobre Nós", destino: "#sobre" },
]

export default function Rodape() {
  return (
    <footer className="bg-teal-950 px-4 py-12 text-emerald-100/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-white">OnDescarte</p>
          <p className="mt-1 text-sm">Descarte consciente em Porto Alegre.</p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.destino}
              href={link.destino}
              className="transition-colors hover:text-white"
            >
              {link.texto}
            </a>
          ))}
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-teal-800 pt-6 text-xs">
        © {new Date().getFullYear()} OnDescarte. Feito em Porto Alegre.
      </p>
    </footer>
  )
}