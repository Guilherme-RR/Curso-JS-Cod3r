const carrinho = [
    { nome: 'Caneta', qtde: 3, preco: 5.50},
    { nome: 'Vaso', qtde: 1, preco: 25.99},
    { nome: 'Pote', qtde: 0, preco: 9.99},
    { nome: 'Garfo', qtde: 4, preco: 12.99},
    { nome: 'Prato', qtde: 3, preco: 17.99},
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
const qtdeMaiorIgualQueZero = item => item.qtde >= 0
const qtdeMuitoGrande = item => item.qtde >= 1000

const nomeItensValido = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomeItensValido)

Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const nomeItensValido2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomeItensValido2)