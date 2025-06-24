const numeros = [1, 2, 3, 4, 5, 6]

const maiorQueZero = el => el > 0
const maiorQueDez = el => el > 10
const par = el => el % 2 === 0

//Números maiores que zero
console.log(numeros.filter(el => el > 0))
//Números maiores que zero
console.log(numeros.filter(maiorQueZero))
//Números maiores que 10
console.log(numeros.filter(maiorQueDez))
//Números pares
console.log(numeros.filter(par))

///////////////////////////////////////////////////////////////////////////////////////////////

const alunos = [
    {name : 'João', nota: 6.9},
    {name : 'Olivia', nota: 7.4},
    {name : 'Denis', nota: 9.3},
    {name : 'Ana', nota: 8.8},

]

const bomAluno = alunos => alunos.nota >= 8.5

console.log(alunos.filter(bomAluno))
console.log(alunos)