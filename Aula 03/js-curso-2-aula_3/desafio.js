let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']

function adicionarLinguagem(linguagem) {
    if (linguagensDeProgramacao.includes(linguagem)) {
        console.log('Linguagem já inclusa na lista')
    } else {
        linguagensDeProgramacao.push(linguagem);
    }
}

let listaAleatoria = ['vermelho', 'preto', 'azul']

function mostrarPrimeiroItemDaListaAleatoria(posicao) {
    console.log(listaAleatoria[posicao]);
}