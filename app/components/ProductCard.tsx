"use client";

import Link from "next/link";
import LikeButton from "./LikeButton";
import styles from "./ProductCard.module.css";

type Produto = {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  avaliacao: number;
};

type ProductCardProps = {
  produto: Produto;
};

export default function ProductCard({ produto }: ProductCardProps) {
  function adicionarCarrinho() {
    const carrinho = JSON.parse(
      localStorage.getItem("carrinho") || "[]"
    );

    const itemExistente = carrinho.find(
      (item: any) => item.id === produto.id
    );

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinho.push({
        ...produto,
        quantidade: 1,
      });
    }

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.imagem}
        src={produto.imagem}
        alt={produto.nome}
      />

      <div className={styles.corpo}>
        <span className={styles.categoria}>
          {produto.categoria}
        </span>

        <h2 className={styles.nome}>
          {produto.nome}
        </h2>

        <p className={styles.avaliacao}>
          ⭐ {produto.avaliacao}
        </p>

        <strong className={styles.preco}>
          R$ {produto.preco.toFixed(2)}
        </strong>
      </div>

      <div className={styles.acoes}>
        <LikeButton produtoId={produto.id} />

        <button
          onClick={adicionarCarrinho}
          className={styles.botaoCarrinho}
        >
          🛒 Adicionar
        </button>

        <Link
          className={styles.link}
          href={`/produto/${produto.id}`}
        >
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
}