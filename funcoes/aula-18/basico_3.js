// Arrow Function (Função de Sete)

const felizAnoNovo = () => console.log('Feliz Ano Novo!')
felizAnoNovo()

///////////////////////////////////////////////////////////////////////////////////////////////

const ola = nome => `ola ${nome}, tudo bem?`
console.log(ola('João'))

///////////////////////////////////////////////////////////////////////////////////////////////

const soma = (...numeros) => {
    let total= 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(soma(1, 2, 3))
console.log(soma(5, 6, 7, 8, 9, 10))
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

///////////////////////////////////////////////////////////////////////////////////////////////

//Exemplo usando 2 parâmentros

const sub = (a, b) => a - b

console.log(sub(10, 3))

///////////////////////////////////////////////////////////////////////////////////////////////

const potencia = base =>  expoente => Math.pow(base, expoente)
    
console.log(potencia(2)(6))

///////////////////////////////////////////////////////////////////////////////////////////////

//this (isso)
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1 ])
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [-1, 1, 2, 3, 4, 5]

numeros.primeiro()
numeros.ultimo()
