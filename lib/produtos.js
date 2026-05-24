// lib/produtos.js
// Dados mockados que simulam uma resposta de API

export const produtos = [
  {
    id: "1",
    nome: "Tênis Runner Pro",
    categoria: "Calçados",
    preco: 299.9,
    descricao:
      "Tênis de corrida leve com amortecimento avançado. Perfeito para treinos longos e competições. Solado de borracha de alta aderência e cabedal respirável.",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avaliacao: 4.5,
    estoque: 12,
  },
  {
    id: "2",
    nome: "Mochila Urbana 30L",
    categoria: "Acessórios",
    preco: 189.9,
    descricao:
      "Mochila resistente à água com compartimento para notebook de até 15 polegadas. Múltiplos bolsos organizadores e alças ergonômicas acolchoadas.",
    imagem: "https://images.unsplash.com/photo-1631593222135-ddb0c59ee75b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avaliacao: 4.2,
    estoque: 8,
  },
  {
    id: "3",
    nome: "Fone Bluetooth ANC",
    categoria: "Eletrônicos",
    preco: 459.9,
    descricao:
      "Fone de ouvido over-ear com cancelamento ativo de ruído e 30h de bateria. Conexão multipoint para até 2 dispositivos simultâneos.",
    imagem: "https://plus.unsplash.com/premium_photo-1679865289918-b21aae5a9559?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avaliacao: 4.8,
    estoque: 5,
  },
  {
    id: "4",
    nome: "Camiseta Dry-Fit",
    categoria: "Roupas",
    preco: 79.9,
    descricao:
      "Camiseta de tecido tecnológico que afasta o suor do corpo. Proteção UV50+ e secagem ultrarrápida para máximo conforto nos treinos.",
    imagem: "https://images.unsplash.com/photo-1716951988375-37d5793385d0?q=80&w=790&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avaliacao: 4.0,
    estoque: 30,
  },
  {
    id: "5",
    nome: "Smartwatch Fit X2",
    categoria: "Eletrônicos",
    preco: 699.9,
    descricao:
      "Relógio inteligente com monitoramento cardíaco, GPS integrado e à prova d'água até 50m. Bateria com duração de 7 dias no modo normal.",
    imagem: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avaliacao: 4.6,
    estoque: 3,
  },
  {
    id: "6",
    nome: "Garrafa Térmica 1L",
    categoria: "Acessórios",
    preco: 129.9,
    descricao:
      "Garrafa de aço inox com isolamento duplo a vácuo. Mantém bebidas quentes por 12h e frias por 24h. Tampa com sistema antivazamento.",
    imagem: "https://plus.unsplash.com/premium_photo-1681496295095-5a3dc1163337?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avaliacao: 4.3,
    estoque: 20,
  },
  {
    id: "7",
    nome: "Shorts de Compressão",
    categoria: "Roupas",
    preco: 109.9,
    descricao:
      "Shorts de compressão muscular para alta performance. Reduz vibração muscular e melhora o retorno venoso. Tecnologia anti-odor.",
    imagem: "https://images.unsplash.com/photo-1645704359333-653438ff8d78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avaliacao: 4.1,
    estoque: 15,
  },
  {
    id: "8",
    nome: "Kettlebell 16kg",
    categoria: "Equipamentos",
    preco: 249.9,
    descricao:
      "Kettlebell em ferro fundido com revestimento emborrachado. Cabo texturizado para maior aderência. Ideal para treinos funcionais e HIIT.",
    imagem: "https://images.unsplash.com/photo-1644085159448-1659fd88a217?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avaliacao: 4.7,
    estoque: 7,
  },
];

// Função auxiliar para buscar produto por ID (simula uma chamada de API)
export function getProdutoPorId(id) {
  return produtos.find((p) => p.id === id) || null;
}

// Função auxiliar para listar categorias únicas
export function getCategorias() {
  return ["Todas", ...new Set(produtos.map((p) => p.categoria))];
}