// Preview copy of backend/src (data + simulacaoService) so the live preview works.
export const produtos = [
  { id: "headset-pulse", nome: "Headset Gamer Pulse", descricao: "Som imersivo e conforto para suas partidas.", precoCentavos: 19990, imagem: "assets/headset.svg" },
  { id: "mouse-velocity", nome: "Mouse Gamer Velocity", descricao: "Precisão e agilidade em cada movimento.", precoCentavos: 12990, imagem: "assets/mouse.svg" },
  { id: "teclado-phantom", nome: "Teclado Mecânico Phantom", descricao: "Desempenho e estilo para sua estação gamer.", precoCentavos: 24990, imagem: "assets/teclado.svg" },
];

export class ErroValidacao extends Error {
  constructor(m: string, public status = 400) { super(m); }
}

export function simular(corpo: any) {
  if (!corpo || typeof corpo !== "object" || !Array.isArray(corpo.itens)) throw new ErroValidacao("Requisição malformada: envie um objeto com a lista 'itens'.");
  const itens: any[] = [];
  for (const item of corpo.itens) {
    if (!item || typeof item.produtoId !== "string") throw new ErroValidacao("Cada item precisa de um 'produtoId' em texto.");
    const p = produtos.find((x) => x.id === item.produtoId);
    if (!p) throw new ErroValidacao(`Produto inexistente: ${item.produtoId}.`, 404);
    const q = item.quantidade;
    if (typeof q !== "number" || !Number.isInteger(q) || q < 0 || q > 999) throw new ErroValidacao(`Quantidade inválida para ${p.nome}. Use um número inteiro de 0 a 999.`);
    if (q === 0) continue;
    itens.push({ produtoId: p.id, nome: p.nome, quantidade: q, precoUnitarioCentavos: p.precoCentavos, subtotalCentavos: p.precoCentavos * q });
  }
  if (!itens.length) return { selecionados: false, mensagem: "Nenhum produto foi selecionado.", itens: [], subtotalCentavos: 0, descontoPercentual: 0, descontoCentavos: 0, totalCentavos: 0 };
  const subtotalCentavos = itens.reduce((s, i) => s + i.subtotalCentavos, 0);
  const descontoPercentual = subtotalCentavos >= 50000 ? 10 : 0;
  const descontoCentavos = Math.round((subtotalCentavos * descontoPercentual) / 100);
  return { selecionados: true, mensagem: "Simulação calculada com sucesso.", itens, subtotalCentavos, descontoPercentual, descontoCentavos, totalCentavos: subtotalCentavos - descontoCentavos };
}
