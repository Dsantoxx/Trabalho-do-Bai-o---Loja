import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>🏪 Catálogo</Link>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/produtos" className={styles.link}>Produtos</Link>
        <Link href="/sobre" className={styles.link}>Sobre</Link>
        <Link href="/carrinho" className={styles.link}>🛒 Carrinho</Link>
      </div>
    </nav>
  );
}