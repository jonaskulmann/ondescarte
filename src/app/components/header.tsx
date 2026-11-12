import { Leaf } from "lucide-react"

const links = [
  { texto: "Localizar Pontos", destino: "#localizar" },
  { texto: "Como Funciona", destino: "#como-funciona" },
  { texto: "Categorias", destino: "#categorias" },
  { texto: "Sobre Nós", destino: "#sobre" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-2000 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <a href="#localizar" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-white">
            <Leaf size={16} />
          </span>
          <span className="font-bold text-gray-900">OnDescarte</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.destino}
              href={link.destino}
              className="text-sm font-semibold text-gray-600 transition-colors hover:text-emerald-700"
            >
              {link.texto}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}