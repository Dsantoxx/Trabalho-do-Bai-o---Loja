import styles from "./Header.module.css";

type HeaderProps = {
  totalProdutos: number;
};

export default function Header({ totalProdutos }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>🛍️ Catálogo Interativo</h1>
      <p className={styles.subtitulo}>{totalProdutos} produtos disponíveis</p>
    </header>
  );
}