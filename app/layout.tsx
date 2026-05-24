import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Catálogo Interativo",
  description: "Explore nossos produtos com filtros e favoritos em tempo real",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, backgroundColor: "#0a1a0a", minHeight: "100vh" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}