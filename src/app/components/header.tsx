import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
      
      <div className="flex items-center gap-2">
        <div className="bg-emerald-700 p-1.5 rounded-full">
          <Leaf className="text-white" size={18} />
        </div>
        <span className="font-bold text-lg text-gray-900">OnDescarte</span>
      </div>

      <nav className="flex items-center gap-6 text-sm text-gray-600 font-semibold">
        <a href="#" className="hover:text-emerald-700">Localizar Pontos</a>
        <a href="#" className="hover:text-gray-900">Como Funciona</a>
        <a href="#" className="hover:text-gray-900">Categorias</a>
        <a href="#" className="hover:text-gray-900">Sobre Nós</a>
      </nav>

    </header>
  );
}