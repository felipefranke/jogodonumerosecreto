let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarClickConsole() {
    console.log('O botão Console foi clicado')
};

function verificarClickAlert() {
    console.log('Eu amo JS')
};

function verificarClickPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
};

function verificarClickSoma() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}