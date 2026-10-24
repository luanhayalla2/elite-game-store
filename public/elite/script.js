// ELITE GAME STORE — script do front-end (JavaScript puro)

// Se a página for aberta direto do arquivo, usa o servidor local; senão, a mesma origem.
const API_URL = location.protocol === "file:" ? "http://localhost:3000/api" : "/api";

const formatarReais = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const reais = (centavos) => formatarReais.format(centavos / 100);

let catalogo = [];

// 1. Busca os produtos no servidor
async function carregarProdutos() {
  const resposta = await fetch(`${API_URL}/produtos`);
  if (!resposta.ok) throw new Error("Falha ao carregar produtos");
  const dados = await resposta.json();
  catalogo = dados.produtos;
  return catalogo;
}

// 2. Monta os cartões do catálogo
function exibirProdutos() {
  const lista = document.getElementById("lista-produtos");
  lista.innerHTML = "";
  catalogo.forEach((produto) => {
    const cartao = document.createElement("article");
    cartao.className = "produto";
    cartao.dataset.produtoId = produto.id;
    cartao.innerHTML = `
      <div class="produto__img">
        <img src="${produto.imagem}" alt="Ilustração do ${produto.nome}" loading="lazy">
      </div>
      <div class="produto__corpo">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span class="produto__preco">${reais(produto.precoCentavos)}</span>
        <span class="produto__id">ID: ${produto.id}</span>
      </div>`;
    // Se a imagem falhar, mostra uma alternativa visual
    cartao.querySelector("img").addEventListener("error", (e) => {
      e.target.outerHTML = `<span class="produto__fallback" aria-hidden="true">${produto.nome.split(" ")[0][0]}</span>`;
    });
    lista.appendChild(cartao);
  });
}

// Pergunta a quantidade até receber um inteiro >= 0. Retorna null se o usuário cancelar.
function perguntarQuantidade(produto) {
  while (true) {
    const resposta = prompt(`Quantas unidades de "${produto.nome}" (${reais(produto.precoCentavos)}) você deseja?\nDigite 0 para não comprar.`);
    if (resposta === null) return null; // cancelou

    const quantidade = Number(resposta);
    if (resposta.trim() !== "" && Number.isInteger(quantidade) && quantidade >= 0) {
      return quantidade;
    }
    alert("Quantidade inválida. Digite um número inteiro igual ou maior que zero.");
  }
}

// Função principal da simulação (chamada pelo onclick)
async function simularCompra() {
  try {
    if (catalogo.length === 0) await carregarProdutos();
  } catch {
    alert("Não foi possível concluir a simulação: o servidor está indisponível.");
    return;
  }

  const itens = [];
  for (const produto of catalogo) {
    const quantidade = perguntarQuantidade(produto);
    if (quantidade === null) {
      alert("Simulação cancelada.");
      return;
    }
    if (quantidade > 0) itens.push({ produtoId: produto.id, quantidade });
  }

  if (itens.length === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  try {
    const resposta = await fetch(`${API_URL}/compras/simular`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itens }),
    });
    const resultado = await resposta.json();
    if (!resposta.ok) {
      alert(`Não foi possível concluir a simulação: ${resultado.erro || "erro no servidor."}`);
      return;
    }
    if (!resultado.selecionados) {
      alert(resultado.mensagem);
      return;
    }

    let texto = "ELITE GAME STORE — Resultado da simulação\n\n";
    resultado.itens.forEach((item) => {
      texto += `${item.nome}\n  ${item.quantidade} x ${reais(item.precoUnitarioCentavos)} = ${reais(item.subtotalCentavos)}\n`;
    });
    texto += `\nSubtotal: ${reais(resultado.subtotalCentavos)}`;
    texto += `\nDesconto (${resultado.descontoPercentual}%): ${reais(resultado.descontoCentavos)}`;
    texto += `\nTotal: ${reais(resultado.totalCentavos)}`;
    texto += "\n\nSimulação acadêmica — nenhum pagamento foi realizado.";
    alert(texto);
  } catch {
    alert("Não foi possível concluir a simulação: falha de comunicação com o servidor.");
  }
}

// Menu para celulares
const botaoMenu = document.querySelector(".menu-botao");
const menu = document.getElementById("menu");
botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menu.classList.remove("aberto");
  botaoMenu.setAttribute("aria-expanded", "false");
}));

// Carrega o catálogo ao abrir a página
carregarProdutos()
  .then(exibirProdutos)
  .catch(() => {
    document.getElementById("lista-produtos").innerHTML =
      '<p class="erro">Não foi possível carregar os produtos. Verifique se o servidor está em execução.</p>';
  });
