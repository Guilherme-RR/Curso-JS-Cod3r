// Função Anônima (Anonymous function) - Função sem nome
(function (a, b, c) {
    return a + b + c
})

//Função de Expressão (Function Expression) - Atribuir uma função como valor de uma variável ou constante.

const sum = function (a, b) {
    return a + b 
}

const result = sum(5, 5)
console.log(result)
///////////////////////////////////////////////////////////////////////////////////////////////

//Definindo o valor da constante anotherSum com base no valor da constante sum tem como valor uma função.
const anotherSum = sum
console.log(anotherSum(10,10))

///////////////////////////////////////////////////////////////////////////////////////////////

//Mostrando que é possível mudar o valor de uma variável mesmo que o seu valor tenha sido declarado antes.
let x = 3
console.log(x)

x = sum
console.log(x(15, 15))