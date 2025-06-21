//Function expression
const increment1 = function(n) {
    return n + 1
}

///////////////////////////////////////////////////////////////////////////////////////////////

//Função seta (Function arrow) - sempre é uma função anônima

const increment2 = (n) => {
    return n + 1 
}

///////////////////////////////////////////////////////////////////////////////////////////////

//Simplificação da função acima, quando a função tem apenas um parâmetro.
const increment3 = n => {
    return n + 1 
}

///////////////////////////////////////////////////////////////////////////////////////////////

// Exemplo mais simplificado, em um caso onde uma função arrow não tem um par de chaves,
// o return se dá como implícito, logo não se faz necessário escrevê-lo no código.
const increment4 = n => n + 1

///////////////////////////////////////////////////////////////////////////////////////////////

// 1° função
console.log(increment1(3))

// 2° função
console.log(increment2(7))

//3° função
console.log(increment3(10))

// 4 ° função
console.log(increment4(19))

///////////////////////////////////////////////////////////////////////////////////////////////

//Nesse caso, há dois parâmetros na função, logo é necessário o uso de parênteses.
const sum = (a, b) => a + b

console.log(sum(10,25))