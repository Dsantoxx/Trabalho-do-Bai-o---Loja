// app/page.tsx
// Server Component — busca os dados e passa para o Client Component

import { produtos } from "../lib/produtos";
import Header from "./components/Header";
import CatalogClient from "./components/CatalogClient";

export default function Home() {
  return (
    <main>
      <Header totalProdutos={produtos.length} />
      <CatalogClient produtos={produtos} />
    </main>
  );
}