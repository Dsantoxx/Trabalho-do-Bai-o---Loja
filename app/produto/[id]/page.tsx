import Link from "next/link";
import { getProdutoPorId } from "../../../lib/produtos";
import styles from "./produto.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProdutoPage({ params }: Props) {
  const { id } = await params;
  const produto = getProdutoPorId(id);

  if (!produto) {
    return (
      <main className={styles.container}>
        <h1>Produto não encontrado</h1>
        <Link href="/" className={styles.voltar}>← Voltar ao catálogo</Link>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.voltar}>← Voltar ao catálogo</Link>
      <div className={styles.conteudo}>
        <img
          className={styles.imagem}
          src={produto.imagem}
          alt={produto.nome}
          width={450}
          height={450}
        />
        <div className={styles.info}>
          <span className={styles.categoria}>{produto.categoria}</span>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <p className={styles.avaliacao}>⭐ {produto.avaliacao} / 5</p>
          <p className={styles.descricao}>{produto.descricao}</p>
          <strong className={styles.preco}>R$ {produto.preco.toFixed(2)}</strong>
          <p className={styles.estoque}>Estoque: {produto.estoque} unidades</p>
          <button className={styles.botao}>🛒 Adicionar ao carrinho</button>
        </div>
      </div>
    </main>
  );
}