// app/components/ProductCard.tsx
// Server Component — exibe os dados de um produto
// LikeButton é Client Component e pode ser usado dentro de Server Components

import Link from "next/link";
import LikeButton from "./LikeButton";

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
    <div>
      <img src={produto.imagem} alt={produto.nome} width={400} height={300} />
      <div>
        <span>{produto.categoria}</span>
        <h2>{produto.nome}</h2>
        <p>⭐ {produto.avaliacao}</p>
        <strong>R$ {produto.preco.toFixed(2)}</strong>
      </div>
      <div>
        <LikeButton produtoId={produto.id} />
        <Link href={`/produto/${produto.id}`}>Ver detalhes →</Link>
      </div>
    </div>
  );
}