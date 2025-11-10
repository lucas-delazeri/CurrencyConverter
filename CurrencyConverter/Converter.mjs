const apiKey = "72781bd9811762d4ca235cf0"; 
let taxaAtual = 1;

const fromSelect = document.querySelector("#fromCurrency");
const toSelect = document.querySelector("#toCurrency");
const valorOrigemInput = document.querySelector("#valorOrigem");
const valorConvertidoInput = document.querySelector("#valorConvertido");
const cotacaoText = document.querySelector("#cotacao");
const converterBtn = document.querySelector("#converterBtn");

// Buscar cotação atual
export async function converterMoedas() {
    const from = fromSelect.value;
    const to = toSelect.value;

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`);
        const data = await response.json();

        if (data && data.conversion_rate) {
            taxaAtual = data.conversion_rate;
            cotacaoText.textContent = `Cotação atual: 1 ${from} = ${taxaAtual.toFixed(2)} ${to}`;
        } else {
            taxaAtual = 5.0;
            cotacaoText.textContent = `Não foi possível obter a cotação. Usando valor padrão: ${from}/${to} = 5,00`;
        }
    } catch (error) {
        taxaAtual = 5.0;
        cotacaoText.textContent = ` Erro ao buscar cotação. Usando valor padrão: ${from}/${to} = 5,00`;
    }
}

// Converte o valor digitado
export function converter() {
    const valorOrigem = parseFloat(valorOrigemInput.value);

    if (isNaN(valorOrigem)) {
        valorConvertidoInput.value = "Valor inválido";
        return;
    }

    const resultado = (valorOrigem * taxaAtual).toFixed(2);
    valorConvertidoInput.value = resultado;
}

fromSelect.addEventListener("change", converterMoedas);
toSelect.addEventListener("change", converterMoedas);
converterBtn.addEventListener("click", converter);

converterMoedas();

