"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./carrinho.module.css";

type ItemCarrinho = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
};

export default function CarrinhoPage() {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem("carrinho");

    if (carrinhoSalvo) {
      setItens(JSON.parse(carrinhoSalvo));
    }
  }

  function salvarCarrinho(novosItens: ItemCarrinho[]) {
    localStorage.setItem(
      "carrinho",
      JSON.stringify(novosItens)
    );

    setItens(novosItens);
  }

  function aumentar(id: string) {
    const novosItens = itens.map((item) =>
      item.id === id
        ? {
            ...item,
            quantidade: item.quantidade + 1,
          }
        : item
    );

    salvarCarrinho(novosItens);
  }

  function diminuir(id: string) {
    const novosItens = itens.map((item) =>
      item.id === id && item.quantidade > 1
        ? {
            ...item,
            quantidade: item.quantidade - 1,
          }
        : item
    );

    salvarCarrinho(novosItens);
  }

  function remover(id: string) {
    const novosItens = itens.filter(
      (item) => item.id !== id
    );

    salvarCarrinho(novosItens);
  }

  const total = itens.reduce(
    (acc, item) =>
      acc + item.preco * item.quantidade,
    0
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>
        🛒 Meu Carrinho
      </h1>

      {itens.length === 0 ? (
        <div className={styles.vazio}>
          <p>Seu carrinho está vazio.</p>

          <Link
            href="/produtos"
            className={styles.linkVoltar}
          >
            Ver produtos →
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.lista}>
            {itens.map((item) => (
              <div
                key={item.id}
                className={styles.item}
              >
                <div className={styles.itemInfo}>
                  <p className={styles.itemNome}>
                    {item.nome}
                  </p>

                  <p className={styles.itemPreco}>
                    R$ {item.preco.toFixed(2)}
                  </p>
                </div>

                <div className={styles.controles}>
                  <button
                    onClick={() =>
                      diminuir(item.id)
                    }
                    className={styles.btn}
                  >
                    −
                  </button>

                  <span className={styles.quantidade}>
                    {item.quantidade}
                  </span>

                  <button
                    onClick={() =>
                      aumentar(item.id)
                    }
                    className={styles.btn}
                  >
                    +
                  </button>
                </div>

                <p className={styles.subtotal}>
                  R$ {(
                    item.preco * item.quantidade
                  ).toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    remover(item.id)
                  }
                  className={styles.remover}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className={styles.rodape}>
            <h2 className={styles.total}>
              Total: R$ {total.toFixed(2)}
            </h2>

            <button className={styles.finalizar}>
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </main>
  );
}