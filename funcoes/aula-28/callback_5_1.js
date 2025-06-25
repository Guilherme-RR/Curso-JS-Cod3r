const carrinho = [
    { nome: 'Caneta', qtde: 3, preco: 5.50},
    { nome: 'Vaso', qtde: 1, preco: 25.99},
    { nome: 'Pote', qtde: 0, preco: 9.99},
    { nome: 'Garfo', qtde: 4, preco: 12.99},
    { nome: 'Prato', qtde: 3, preco: 17.99},
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el
const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)

Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial
    for(let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
        } else {
            acc = fn(acc, this[i], i, this)
        }
    }
    return acc
}

const totalGeral2 = carrinho
    .map(getTotal)
    .meuReduce(somar)

console.log(totalGeral2)