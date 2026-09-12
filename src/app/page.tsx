export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 px-4">

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

    </main>
  );
}