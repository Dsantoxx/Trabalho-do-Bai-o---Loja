"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import styles from "./CatalogClient.module.css";

type Produto = {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem: string;
  avaliacao: number;
  estoque: number;
};

type CatalogClientProps = {
  produtos: Produto[];
};

export default function CatalogClient({ produtos }: CatalogClientProps) {
  const [termoBusca, setTermoBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  const categorias = ["Todas", ...new Set(produtos.map((p) => p.categoria))];

  const produtosFiltrados = produtos.filter((produto) => {
    const bateNome = produto.nome.toLowerCase().includes(termoBusca.toLowerCase());
    const bateCategoria = categoriaAtiva === "Todas" || produto.categoria === categoriaAtiva;
    return bateNome && bateCategoria;
  });

  return (
    <div className={styles.wrapper}>
      <SearchBar onSearch={setTermoBusca} />
      <div className={styles.filtros}>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`${styles.filtroBotao} ${categoriaAtiva === cat ? styles.ativo : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <p className={styles.resultado}>{produtosFiltrados.length} produto(s) encontrado(s)</p>
      <div className={styles.grid}>
        {produtosFiltrados.length === 0 ? (
          <p className={styles.vazio}>Nenhum produto encontrado para "{termoBusca}".</p>
        ) : (
          produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))
        )}
      </div>
    </div>
  );
}