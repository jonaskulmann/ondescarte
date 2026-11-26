# ♻️ OnDescarte

### Descarte consciente começa com a informação certa.

O **OnDescarte** é uma plataforma digital que facilita o descarte correto de resíduos, conectando cidadãos a pontos de coleta e reciclagem em Porto Alegre, RS.

Através de uma interface simples e de um mapa interativo, qualquer pessoa pode encontrar locais de descarte próximos, consultar os materiais aceitos e descobrir como separar seus resíduos corretamente.

🌐 **Acesse o projeto:** [ondescarte.vercel.app](https://ondescarte.vercel.app/)

---

## 🌱 Sobre o projeto

O OnDescarte nasceu de uma pergunta simples: **"Onde eu descarto isso?"**

Muitas pessoas querem realizar o descarte correto de seus resíduos, mas encontram dificuldades para localizar pontos de coleta ou descobrir quais materiais são aceitos em cada estabelecimento.

A proposta do projeto é centralizar essas informações em uma única plataforma, tornando o descarte consciente mais acessível, prático e intuitivo.

Atualmente, a plataforma atende Porto Alegre, RS.

## ✨ Funcionalidades

- **Busca por localização:** encontre pontos de coleta utilizando endereço ou CEP.
- **Mapa interativo:** visualize os locais de descarte disponíveis.
- **Pontos próximos:** encontre locais de coleta próximos à localização pesquisada.
- **Informações detalhadas:** consulte endereço, distância e materiais aceitos em cada ponto.
- **Categorias de resíduos:** informações sobre plástico, papel, vidro, metal, eletrônicos e óleo de cozinha.
- **Orientações de descarte:** saiba quais materiais podem ser descartados e como prepará-los corretamente.
- **Interface intuitiva:** navegação simples, sem necessidade de cadastro.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| Next.js | Framework da aplicação |
| React | Construção da interface |
| TypeScript | Tipagem e organização do código |
| Tailwind CSS | Estilização |
| Supabase | Banco de dados e busca de pontos |
| Leaflet | Mapas interativos |
| React Leaflet | Integração dos mapas com React |
| Lucide React | Ícones |
| Vercel | Hospedagem e deploy |

## 🚀 Executando localmente

### Pré-requisitos

- Node.js
- npm
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/jonaskulmann/ondescarte.git
```

### 2. Entre na pasta do projeto

```bash
cd ondescarte
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto e configure as credenciais do Supabase utilizadas pela aplicação.

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_publica_supabase
```

Utilize as credenciais do seu próprio projeto Supabase e nunca publique chaves privadas ou secretas.

### 5. Execute o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do projeto

```text
ondescarte/
├── public/          # Arquivos estáticos
├── src/             # Código-fonte da aplicação
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🎯 Objetivo

O OnDescarte busca aproximar a tecnologia da sustentabilidade, facilitando o acesso à informação e incentivando hábitos mais conscientes no cotidiano.

Acreditamos que pequenas atitudes podem gerar grandes mudanças quando as informações certas estão ao alcance de todos.

## 👨‍💻 Desenvolvedores

**Jonas Kulmann**
- Busca de pontos de coleta e integração com banco de dados.

**Gustavo Mattos**
- Front-end, design e implementação do mapa.

## 📍 Abrangência

Atualmente, o OnDescarte concentra seus serviços em **Porto Alegre – Rio Grande do Sul, Brasil**.

---

<p align="center">
  ♻️ <strong>OnDescarte — Descarte consciente em seu bairro.</strong>
  <br/>
  <em>Encontre. Separe. Descarte corretamente.</em>
</p>
