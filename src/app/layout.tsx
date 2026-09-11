import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "OnDescarte",
  description: "Encontre pontos de coleta de reciclagem perto de você",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}