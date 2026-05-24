"use client";

import { useState } from "react";
import styles from "./SearchBar.module.css";

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
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Buscar produtos..."
        value={valor}
        onChange={handleChange}
      />
    </div>
  );
}