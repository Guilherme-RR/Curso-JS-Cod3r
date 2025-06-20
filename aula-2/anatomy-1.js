// Declaração de função (Function declaration)

//Função que não recebe parâmetro e também não retorna nada.

function sayHello() {
    console.log('Hello!')
}

sayHello()

///////////////////////////////////////////////////////////////////////////////////////////////

//Função que recebe parâmetro, porém não retorna nada.

function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

sayHelloTo('Mike')

///////////////////////////////////////////////////////////////////////////////////////////////

//Função que nçao recebe parâmetro, mas retorna um valor.

function returnHi() {
    return 'Hi!'
}

//Pode ser usado var e let também.
const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

///////////////////////////////////////////////////////////////////////////////////////////////

//Função que recebe parâmetro e também retorna valor.

function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('John'))