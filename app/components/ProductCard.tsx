import Link from "next/link";
import Image from "next/image";
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
  return (
    <div className={styles.card}>
      <img
        className={styles.imagem}
        src={produto.imagem}
        alt={produto.nome}
        width={400}
        height={200}
      />
      <div className={styles.corpo}>
        <span className={styles.categoria}>{produto.categoria}</span>
        <h2 className={styles.nome}>{produto.nome}</h2>
        <p className={styles.avaliacao}>⭐ {produto.avaliacao}</p>
        <strong className={styles.preco}>R$ {produto.preco.toFixed(2)}</strong>
      </div>
      <div className={styles.acoes}>
        <LikeButton produtoId={produto.id} />
        <Link className={styles.link} href={`/produto/${produto.id}`}>
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
}