// app/produtos/page.tsx
// Server Component — lista todos os produtos em formato tabela

import { produtos } from "../../lib/produtos";
import ProductCard from "../components/ProductCard";
import styles from "./produtos.module.css";

export default function ProdutosPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Todos os Produtos</h1>
      <p className={styles.subtitulo}>
        Confira nosso catálogo completo com {produtos.length} itens
      </p>
      <div className={styles.grid}>
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </main>
  );
}