const taxaDeCambio = {
  USD: 1,      // Dólar Americano (moeda base)
  EUR: 0.93,   // Euro
  JPY: 148.89, // Iene Japonês
  GBP: 0.82,   // Libra Esterlina
  CAD: 1.36    // Dólar Canadense
};
function converterEAlertar(valor, deMoeda) {
  // Verifica se a moeda base está presente nas taxas de câmbio
  if (!taxaDeCambio[deMoeda]) {
    alert('Moeda base desconhecida.');
    return;
  }
  const moedasAlvo = ['EUR', 'JPY', 'GBP', 'CAD'];

  moedasAlvo.forEach(paraMoeda => {
    if (!taxaDeCambio[paraMoeda]) {
      alert(`Moeda de destino desconhecida: ${paraMoeda}`);
      return;
    }
    const valorEmMoedaBase = valor / taxaDeCambio[deMoeda];
    const valorConvertido = valorEmMoedaBase * taxaDeCambio[paraMoeda];
    
    alert(`${valor} ${deMoeda} é igual a ${valorConvertido} ${paraMoeda}`);
  });
}

const valor = Number(prompt('digite um valor')); // Quantidade em moeda base
const deMoeda = 'USD'; // Moeda base

converterEAlertar(valor, deMoeda);
}
