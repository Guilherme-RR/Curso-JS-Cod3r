// Desafio Map, Reduce e Filter

const carrinho = [
    { nome: 'Caneta', qtde: 3, preco: 5.50, fragil: true},
    { nome: 'Vaso', qtde: 1, preco: 25.99, fragil: true},
    { nome: 'Pote', qtde: 0, preco: 9.99, fragil: false},
    { nome: 'Garfo', qtde: 4, preco: 12.99, fragil: false},
    { nome: 'Prato', qtde: 3, preco: 17.99, fragil: true},
]

// filter, map, reduce
// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

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

const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return{
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const mediaInicial = { qtde: 0, total: 0, media: 0}

const media = carrinho
    .filter(fragil)
    .map(getTotal)
    .meuReduce(getMedia, mediaInicial)
    .media

console.log(`A média é ${media}!`)