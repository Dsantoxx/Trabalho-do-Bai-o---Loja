// app/components/CatalogClient.tsx
// Client Component — gerencia o estado da busca e filtragem dos produtos

"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";

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
    const bateNome = produto.nome
      .toLowerCase()
      .includes(termoBusca.toLowerCase());
    const bateCategoria =
      categoriaAtiva === "Todas" || produto.categoria === categoriaAtiva;
    return bateNome && bateCategoria;
  });

  return (
    <div>
      <SearchBar onSearch={setTermoBusca} />

      <div>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            style={{ fontWeight: categoriaAtiva === cat ? "bold" : "normal" }}
          >
            {cat}
          </button>
        ))}
      </div>

      <p>{produtosFiltrados.length} produto(s) encontrado(s)</p>

      <div>
        {produtosFiltrados.length === 0 ? (
          <p>Nenhum produto encontrado para "{termoBusca}".</p>
        ) : (
          produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))
        )}
      </div>
    </div>
  );
}