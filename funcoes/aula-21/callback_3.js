
const numeros = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(numeros.map(dobro))

const nomes = ['Ana', 'Laura', 'Ronaldo', 'Maria', 'Rafael']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

///////////////////////////////////////////////////////////////////////////////////////////////

const carrinho = [
    { nome: 'Caneta', qtde: 3, preco: 5.50},
    { nome: 'Vaso', qtde: 1, preco: 25.99},
    { nome: 'Pote', qtde: 2, preco: 9.99},
    { nome: 'Garfo', qtde: 4, preco: 12.99},
    { nome: 'Prato', qtde: 3, preco: 17.99},
]

console.log(carrinho)