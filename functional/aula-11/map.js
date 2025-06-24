const numeros = [1, 2, 3, 4, 5, 6]

const numeros2 = numeros.map(el => el * 2)

console.log(numeros, numeros2)

///////////////////////////////////////////////////////////////////////////////////////////////

const alunos = [
    {name : 'João', nota: 6.9},
    {name : 'Olivia', nota: 7.4},
    {name : 'Denis', nota: 9.3},
    {name : 'Ana', nota: 8.8},

]

const Notas = el => el.nota

const final = alunos
        .map(Notas)
        .map(Math.ceil)

console.log(alunos, final)