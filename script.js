// Preços dos produtos (iguais aos exibidos na página)
const PRECO_LIMONADA = 12.0;
const PRECO_MILKSHAKE = 18.5;
const PRECO_SANDUICHE = 29.9;
const PRECO_BROWNIE = 14.0;

// Regra da Promoção Colmeia: 10% de desconto a partir de R$ 80,00
const VALOR_MINIMO_DESCONTO = 80.0;
const PERCENTUAL_DESCONTO = 0.1;

// Pergunta a quantidade de um produto e só aceita números inteiros a partir de 0.
// Se o usuário digitar texto, número negativo ou decimal, a pergunta é repetida.
// Formata um número no padrão de moeda brasileiro, ex.: 74.4 -> "74,40"
function formatarReal(valor) {
  return valor.toFixed(2).replace(".", ",");
}

function perguntarQuantidade(mensagem) {
  let quantidade = Number(prompt(mensagem));

  while (isNaN(quantidade) || quantidade < 0 || !Number.isInteger(quantidade)) {
    alert("Quantidade inválida! Digite um número inteiro, como 0, 1, 2...");
    quantidade = Number(prompt(mensagem));
  }

  return quantidade;
}

function simularCompra() {
  // 1. Pergunta a quantidade de cada produto e converte para número
  let qtdLimonada = perguntarQuantidade("Quantas Limonadas Lemonade (R$ 12,00)? Digite 0 para nenhuma.");
  let qtdMilkshake = perguntarQuantidade("Quantos Milkshakes Renaissance (R$ 18,50)? Digite 0 para nenhum.");
  let qtdSanduiche = perguntarQuantidade("Quantos Sanduíches Cowboy Carter (R$ 29,90)? Digite 0 para nenhum.");
  let qtdBrownie = perguntarQuantidade("Quantos Brownies Sasha Fierce (R$ 14,00)? Digite 0 para nenhum.");

  // 2. Verifica se nenhum produto foi escolhido
  if (qtdLimonada === 0 && qtdMilkshake === 0 && qtdSanduiche === 0 && qtdBrownie === 0) {
    alert("Nenhum produto foi selecionado. Volte sempre ao Beyhive Café! 🐝");
    return;
  }

  // 3. Calcula o valor de cada produto (preço x quantidade)
  let valorLimonada = PRECO_LIMONADA * qtdLimonada;
  let valorMilkshake = PRECO_MILKSHAKE * qtdMilkshake;
  let valorSanduiche = PRECO_SANDUICHE * qtdSanduiche;
  let valorBrownie = PRECO_BROWNIE * qtdBrownie;

  let subtotal = valorLimonada + valorMilkshake + valorSanduiche + valorBrownie;

  // 4. Verifica o direito ao desconto da Promoção Colmeia
  let desconto = 0;
  if (subtotal >= VALOR_MINIMO_DESCONTO) {
    desconto = subtotal * PERCENTUAL_DESCONTO;
  }
  let total = subtotal - desconto;

  // 5. Mostra o resumo do pedido
  let resumo = "🐝 RESUMO DO PEDIDO - BEYHIVE CAFÉ 🐝\n\n";
  resumo += "Limonada Lemonade: " + qtdLimonada + " x R$ 12,00 = R$ " + formatarReal(valorLimonada) + "\n";
  resumo += "Milkshake Renaissance: " + qtdMilkshake + " x R$ 18,50 = R$ " + formatarReal(valorMilkshake) + "\n";
  resumo += "Sanduíche Cowboy Carter: " + qtdSanduiche + " x R$ 29,90 = R$ " + formatarReal(valorSanduiche) + "\n";
  resumo += "Brownie Sasha Fierce: " + qtdBrownie + " x R$ 14,00 = R$ " + formatarReal(valorBrownie) + "\n\n";
  resumo += "Subtotal: R$ " + formatarReal(subtotal) + "\n";

  if (desconto > 0) {
    resumo += "Promoção Colmeia (10%): - R$ " + formatarReal(desconto) + "\n";
  } else {
    let falta = VALOR_MINIMO_DESCONTO - subtotal;
    resumo += "Sem desconto. Faltaram R$ " + formatarReal(falta) + " para ganhar 10% off.\n";
  }

  resumo += "TOTAL: R$ " + formatarReal(total);

  alert(resumo);
}
