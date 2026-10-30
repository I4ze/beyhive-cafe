// Preços dos produtos (iguais aos exibidos na página)
const PRECO_LIMONADA = 12.0;
const PRECO_MILKSHAKE = 18.5;
const PRECO_SANDUICHE = 29.9;
const PRECO_BROWNIE = 14.0;

function simularCompra() {
  // 1. Pergunta a quantidade de cada produto e converte para número
  let qtdLimonada = Number(prompt("Quantas Limonadas Lemonade (R$ 12,00)? Digite 0 para nenhuma."));
  let qtdMilkshake = Number(prompt("Quantos Milkshakes Renaissance (R$ 18,50)? Digite 0 para nenhum."));
  let qtdSanduiche = Number(prompt("Quantos Sanduíches Cowboy Carter (R$ 29,90)? Digite 0 para nenhum."));
  let qtdBrownie = Number(prompt("Quantos Brownies Sasha Fierce (R$ 14,00)? Digite 0 para nenhum."));

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

  let total = valorLimonada + valorMilkshake + valorSanduiche + valorBrownie;

  // 4. Mostra o resumo do pedido
  let resumo = "🐝 RESUMO DO PEDIDO - BEYHIVE CAFÉ 🐝\n\n";
  resumo += "Limonada Lemonade: " + qtdLimonada + " x R$ 12,00 = R$ " + valorLimonada.toFixed(2) + "\n";
  resumo += "Milkshake Renaissance: " + qtdMilkshake + " x R$ 18,50 = R$ " + valorMilkshake.toFixed(2) + "\n";
  resumo += "Sanduíche Cowboy Carter: " + qtdSanduiche + " x R$ 29,90 = R$ " + valorSanduiche.toFixed(2) + "\n";
  resumo += "Brownie Sasha Fierce: " + qtdBrownie + " x R$ 14,00 = R$ " + valorBrownie.toFixed(2) + "\n\n";
  resumo += "TOTAL: R$ " + total.toFixed(2);

  alert(resumo);
}
