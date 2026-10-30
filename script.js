// Preços dos produtos (os mesmos da página)
const precoCafe = 12.0;
const precoMilkshake = 18.5;
const precoSanduiche = 29.9;
const precoPanqueca = 14.0;

// Promoção Colmeia: 10% de desconto a partir de R$ 80,00
const valorMinimoDesconto = 80.0;
const desconto = 0.1;

// Mostra o valor com vírgula, ex.: 74.4 vira "74,40"
function formatarReal(valor) {
  return valor.toFixed(2).replace(".", ",");
}

// Repete a pergunta até a pessoa digitar um número inteiro de 0 pra cima
function perguntarQuantidade(mensagem) {
  let quantidade = Number(prompt(mensagem));

  while (isNaN(quantidade) || quantidade < 0 || !Number.isInteger(quantidade)) {
    alert("Quantidade inválida! Digite um número inteiro, como 0, 1, 2...");
    quantidade = Number(prompt(mensagem));
  }

  return quantidade;
}

function simularCompra() {
  let qtdCafe = perguntarQuantidade("Quantos Cafés Stop Callin' (R$ 12,00)? Digite 0 para nenhum.");
  let qtdMilkshake = perguntarQuantidade("Quantos Milkshakes Telephone (R$ 18,50)? Digite 0 para nenhum.");
  let qtdSanduiche = perguntarQuantidade("Quantos Sanduíches Let's Make a Sandwich (R$ 29,90)? Digite 0 para nenhum.");
  let qtdPanqueca = perguntarQuantidade("Quantas Panquecas Honey B (R$ 14,00)? Digite 0 para nenhuma.");

  if (qtdCafe == 0 && qtdMilkshake == 0 && qtdSanduiche == 0 && qtdPanqueca == 0) {
    alert("Nenhum produto foi selecionado. Volte sempre ao Beyhive Café! 🐝");
    return;
  }

  let valorCafe = precoCafe * qtdCafe;
  let valorMilkshake = precoMilkshake * qtdMilkshake;
  let valorSanduiche = precoSanduiche * qtdSanduiche;
  let valorPanqueca = precoPanqueca * qtdPanqueca;

  let subtotal = valorCafe + valorMilkshake + valorSanduiche + valorPanqueca;
  let valorDesconto = 0;

  if (subtotal >= valorMinimoDesconto) {
    valorDesconto = subtotal * desconto;
  }

  let total = subtotal - valorDesconto;

  let resumo = "🐝 BEYHIVE CAFÉ - SEU PEDIDO 🐝\n\n";
  resumo += "Café Stop Callin': " + qtdCafe + " x R$ 12,00 = R$ " + formatarReal(valorCafe) + "\n";
  resumo += "Milkshake Telephone: " + qtdMilkshake + " x R$ 18,50 = R$ " + formatarReal(valorMilkshake) + "\n";
  resumo += "Sanduíche Let's Make a Sandwich: " + qtdSanduiche + " x R$ 29,90 = R$ " + formatarReal(valorSanduiche) + "\n";
  resumo += "Panquecas Honey B: " + qtdPanqueca + " x R$ 14,00 = R$ " + formatarReal(valorPanqueca) + "\n\n";
  resumo += "Subtotal: R$ " + formatarReal(subtotal) + "\n";

  if (valorDesconto > 0) {
    resumo += "Promoção Colmeia (10%): - R$ " + formatarReal(valorDesconto) + "\n";
  } else {
    resumo += "Sem desconto. Faltaram R$ " + formatarReal(valorMinimoDesconto - subtotal) + " para ganhar 10%.\n";
  }

  resumo += "TOTAL: R$ " + formatarReal(total);

  alert(resumo);
}
