const carrinho = [
    { nome: 'Caneta', qtde: 3, preco: 5.50},
    { nome: 'Vaso', qtde: 1, preco: 25.99},
    { nome: 'Pote', qtde: 2, preco: 9.99},
    { nome: 'Garfo', qtde: 4, preco: 12.99},
    { nome: 'Prato', qtde: 3, preco: 17.99},
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)