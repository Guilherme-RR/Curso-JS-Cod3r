const numeros = [1, 2, 3, 4, 5, 6]

const soma = (total, numeros) => total + numeros
const total = numeros.reduce(soma)

console.log(total)

///////////////////////////////////////////////////////////////////////////////////////////////

const media = (total, numeros, i, array) => {
    if(i === array.length - 1) {
        return (total + numeros) / array.length
    }
    else {
        return total + numeros
    }
}
const mediaTotal = numeros.reduce(media)
console.log(mediaTotal)