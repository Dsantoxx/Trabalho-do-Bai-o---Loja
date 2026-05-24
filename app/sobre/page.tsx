import styles from "./sobre.module.css";

export default function SobrePage() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.titulo}>
          Sobre o Catálogo
        </h1>

        <p className={styles.descricao}>
          Uma plataforma moderna para explorar
          produtos com filtros inteligentes,
          favoritos e navegação fluida.
        </p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <span className={styles.icone}>⚡</span>

          <h2>Tecnologia</h2>

          <p>
            Desenvolvido com Next.js 15,
            React e CSS Modules.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.icone}>🎨</span>

          <h2>Design</h2>

          <p>
            Interface moderna e responsiva.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.icone}>🔍</span>

          <h2>Busca</h2>

          <p>
            Filtros em tempo real por nome e
            categoria.
          </p>
        </div>
      </div>

      <div className={styles.info}>
        <h2>Stack utilizada</h2>

        <ul className={styles.lista}>
          <li>✅ Next.js 15</li>
          <li>✅ React</li>
          <li>✅ CSS Modules</li>
          <li>✅ App Router</li>
          <li>✅ Deploy na Vercel</li>
        </ul>
      </div>
    </main>
  );
}