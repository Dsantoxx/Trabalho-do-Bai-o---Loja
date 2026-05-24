// app/components/Header.tsx
// Server Component — exibe o cabeçalho estático da aplicação

type HeaderProps = {
  totalProdutos: number;
};

export default function Header({ totalProdutos }: HeaderProps) {
  return (
    <header>
      <h1>🛍️ Catálogo Interativo</h1>
      <p>{totalProdutos} produtos disponíveis</p>
    </header>
  );
}