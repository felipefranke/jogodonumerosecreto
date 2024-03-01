// Calculadora de IMC


function calculadoraImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}


// fatorial

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
}

// converter dolar para reais

function converter(dolar, cotacaoDolar) {
    let valor = dolar * cotacaoDolar;
    console.log(`U$ ${dolar} = R$ ${valor}`);
}

// area quadrada

function metragem(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`${area}m2`)
    console.log(`${perimetro}m2`)
}


// area circulo

function Circulo(raio) {
    let perimetro = Math.PI * raio * raio;
    let areaCirculo = 2 * Math.PI * raio
    console.log(`Perimetro = ${perimetro}m`)
    console.log(`àrea = ${areaCirculo}m2`)
}

// taboada

function taboada(numero) {
    for(let i = 1; i<=10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
    }
}

