// Função Anônima (Anonymous function) - Função sem nome
// Usando o console.log diretamente na função anônima
// IIFE - Immediately Invoked Function Expression (Função de Expressão Imediatamente Invocada)
// Uso para garantir que certos valores vão estar dentro de um escopo mais restrito.
(function (a, b, c) {
    let x = 5
    console.log(`Resultado: ${ a + b + c}`)
    console.log(x)
})(1, 2, 3);

///////////////////////////////////////////////////////////////////////////////////////////////

//IIFE é geralmente usada sem parâmetros.
(function () {
    let x = 100
    console.log(x)
})();

///////////////////////////////////////////////////////////////////////////////////////////////


//Função Arrow imediatamente invocada.
(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();