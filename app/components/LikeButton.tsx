// app/components/LikeButton.tsx
// Client Component — precisa de "use client" por usar useState

"use client";

import { useState } from "react";

type LikeButtonProps = {
  produtoId: string;
};

export default function LikeButton({ produtoId }: LikeButtonProps) {
  const [curtido, setCurtido] = useState(false);

  function handleClick() {
    setCurtido((prev) => !prev);
  }

  return (
    <button onClick={handleClick} aria-label="Curtir produto">
      {curtido ? "❤️ Curtido" : "🤍 Curtir"}
    </button>
  );
}