/* 
* Functions that operate on others functions,
* either by taking them as arguments or by
* returning them, are called higher-order functions.
*/

function run(fn) {
    return `Resultado: ${fn()}`
}

function sayHello() {
    console.log('Ola!!')
}

run(sayHello)

///////////////////////////////////////////////////////////////////////////////////////////////

run (function() {
    console.log('Corra!!!')
})

///////////////////////////////////////////////////////////////////////////////////////////////

const resultado = run(Math.random) 

console.log(resultado)