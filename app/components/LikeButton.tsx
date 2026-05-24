"use client";

import { useState } from "react";
import styles from "./LikeButton.module.css";

type LikeButtonProps = {
  produtoId: string;
};

export default function LikeButton({ produtoId }: LikeButtonProps) {
  const [curtido, setCurtido] = useState(false);

  return (
    <button
      onClick={() => setCurtido((prev) => !prev)}
      className={`${styles.botao} ${curtido ? styles.curtido : ""}`}
    >
      {curtido ? "❤️ Curtido" : "🤍 Curtir"}
    </button>
  );
}