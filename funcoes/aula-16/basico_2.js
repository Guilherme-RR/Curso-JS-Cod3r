function bomDia() {
    console.log('Bom dia!')
}

function boaTarde() {
    console.log('Boa Tarde!')
}

//Passar uma função para outra

function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(4)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

///////////////////////////////////////////////////////////////////////////////////////////////

// Retornar uma função a partir de uma outra função

function potencia(base) {
    return function(expoente) {
        return Math.pow(base, expoente)
    }
}

const potencia2 = potencia(2)
console.log(potencia2(8))

const potencia3e4 = potencia(3)(4)
console.log(potencia3e4)