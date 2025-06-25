let a = 4
console.log(a)

//Function Declaration (Declaração de uma Função)

///////////////////////////////////////////////////////////////////////////////////////////////

function boaNoite() {
    console.log('Boa Noite!')
}

boaNoite()

///////////////////////////////////////////////////////////////////////////////////////////////

//Function Expression (Função de Expressão)

const bomDia = function () {
    console.log('Bom dia!')
}

bomDia()

///////////////////////////////////////////////////////////////////////////////////////////////

function soma(a = 0, b = 0) {
    return a + b
}

let resultado = soma(3, 4)
console.log(resultado)

resultado = soma(1, 2, 3, 4, 5, 6)
console.log(resultado)

resultado = soma(3)
console.log(resultado)

resultado = soma()
console.log(resultado)