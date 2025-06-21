
function logParams(a, b, c) {
    console.log(a, b, c)
}

//Mais parâmetros do que foram declardos na função
logParams(1, 2, 3, 4, 5)
//Quantidade certa de parâmetros
logParams(1, 2, 3)
//Um parâmetro a menos do que foi declarado
//Quando não é inserido o valor de um parâmetro, o valor desse parâmetro se torna undefined.
logParams(1, 2)
//dois parâmetros a menos do que foi declarado
logParams(1)
//Nenhum valor inserido
logParams()

///////////////////////////////////////////////////////////////////////////////////////////////

//Pré-definindo o valor dos parâmetros
function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}
//O valor pré-definido do parâmetro é substituído, caso haja valor para substituí-lo
defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams()

///////////////////////////////////////////////////////////////////////////////////////////////

//Console.log mais "flexível" usando parâmetros
//spread/rest ou '...' faz com que a função consiga receber uma valor variável de parâmetros
function logNums(...nums) {
    console.log(Array.isArray(nums))
    for(let n of nums) {
        console.log(n)
    }
}

logNums(1, 2, 3, 4, 5, 6)

//Versão mais simplificada
function logNums2(...nums) {
    console.log(nums)
}

logNums2(1, 2, 3, 4, 5, 6)
///////////////////////////////////////////////////////////////////////////////////////////////

//Função que soma o valor inserido nos parâmetros
function sumAll (...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))