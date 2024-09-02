function calcularValorBase(precoProduto, percentualDesconto) {
    const desconto = precoProduto * (percentualDesconto / 100);
    const valorBase = precoProduto - desconto;
    return valorBase;
}

// Função para calcular o valor do ICMS
function calcularICMS(valorBase, aliquotaICMS) {
    const valorICMS = valorBase * (aliquotaICMS / 100);
    return valorICMS;
}

// Função para calcular o valor final da mercadoria com ICMS
function calcularValorFinal(precoProduto, percentualDesconto, aliquotaICMS) {
    const valorBase = calcularValorBase(precoProduto, percentualDesconto);
    const valorICMS = calcularICMS(valorBase, aliquotaICMS);
    const valorFinal = valorBase + valorICMS;
    return valorFinal;
}

const precoProduto = Number(prompt("digite um numero")); // Preço do produto em reais
const percentualDesconto = 10; // Percentual de desconto aplicado
const aliquotaICMS = 18; // Alíquota do ICMS em %

const valorFinal = calcularValorFinal(precoProduto, percentualDesconto, aliquotaICMS);
console.log("Valor Final da Mercadoria com ICMS: R$", valorFinal);
