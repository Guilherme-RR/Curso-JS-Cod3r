// Desafio - Somar

function somar (x) {
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
}

const somaCalc = somar(1)(2)
console.log(somaCalc(7))
console.log(somar(10)(15)(20))

///////////////////////////////////////////////////////////////////////////////////////////////

// Desafio operações

function calcular(a) {
    return function(b) {
        return function(fn) {
            return fn(a, b)
        }
    }
}

function sub(x, y) {
    return x - y
}

const res1 = calcular(15)(5)(sub)
console.log(res1)


function mult(x, y) {
    return x * y
}

const res2 = calcular(2)(6)(mult)
console.log(res2)