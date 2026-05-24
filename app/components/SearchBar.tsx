// app/components/SearchBar.tsx
// Client Component — captura input do usuário em tempo real

"use client";

import { useState } from "react";

type SearchBarProps = {
  onSearch: (termo: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [valor, setValor] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValor(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={valor}
        onChange={handleChange}
      />
    </div>
  );
}