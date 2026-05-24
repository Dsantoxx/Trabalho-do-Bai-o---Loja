// app/produto/[id]/page.tsx
// Server Component — página de detalhes de um produto específico
// O Next.js captura o [id] da URL automaticamente via params

import Link from "next/link";
import { getProdutoPorId } from "../../../lib/produtos";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProdutoPage({ params }: Props) {
  const { id } = await params;
  const produto = getProdutoPorId(id);

  if (!produto) {
    return (
      <main>
        <h1>Produto não encontrado</h1>
        <Link href="/">← Voltar ao catálogo</Link>
      </main>
    );
  }

  return (
    <main>
      <Link href="/">← Voltar ao catálogo</Link>

      <img src={produto.imagem} alt={produto.nome} width={400} height={300} />

      <div>
        <span>{produto.categoria}</span>
        <h1>{produto.nome}</h1>
        <p>⭐ {produto.avaliacao} / 5</p>
        <p>{produto.descricao}</p>
        <strong>R$ {produto.preco.toFixed(2)}</strong>
        <p>Estoque: {produto.estoque} unidades</p>
      </div>

      <button>🛒 Adicionar ao carrinho</button>
    </main>
  );
}