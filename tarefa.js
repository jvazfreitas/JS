// 

function converterUSDtoBRL(valorUSD, taxaDeCambio){

    const valorBRL = valorUSD * taxaDeCambio;
    return valorBRL;
}
const valorEmUSD = Number(prompt('Digite um Valor')); // Valor em USD
const taxaDeCambioAtual = 5.55; // (USD to BRL)

    const valorEmBRL = converterUSDtoBRL(valorEmUSD, taxaDeCambioAtual);
    console.log(`U$${valorEmUSD} USD é equivalente a R$${valorEmBRL.toFixed(2)} BRL.`);

// 

function calcularICMS(valorOperacao, aliquota) {
    // Convertemos a alíquota de percentual para decimal
    var aliquotaDecimal = aliquota / 100;
    
    // Calculamos o valor do ICMS
    var icms = valorOperacao * aliquotaDecimal;
    
    // Retorna o valor do ICMS
    return icms;
}

// Exemplos de uso
var valorDaOperacao = 1000; // Valor total da mercadoria ou serviço
var aliquotaICMS = 18; // Alíquota do ICMS (exemplo: 18%)

// Calcula o ICMS
var valorICMS = calcularICMS(valorDaOperacao, aliquotaICMS);

// Exibe o resultado no console
console.log("O valor do ICMS é R$ " + (valorICMS));

// 

function saoMultiplos(numero1, numero2) {
    // Verifica se o número1 é múltiplo de numero2
    return numero1 % numero2 === 0;
}
const num1 = Number(prompt('digite um numero'));
const num2 = Number(prompt('digie outro numero'));

if (saoMultiplos(num1, num2)) {
    alert(`é múltiplo`);
} else {
    console.log(`não é múltiplo`);
}
