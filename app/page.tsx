import { produtos } from "../lib/produtos";

export default function Home() {
  return (
    <main>
      <h1>Catálogo de Produtos</h1>
      <p>Total de produtos: {produtos.length}</p>
    </main>
  );
}