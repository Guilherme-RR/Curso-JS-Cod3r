const alunos = [
    {name : 'João', nota: 6.9},
    {name : 'Olivia', nota: 7.4},
    {name : 'Denis', nota: 9.3},
    {name : 'Ana', nota: 8.8},

]

const bomAluno = alunos => alunos.nota >= 8.5

const Notas = el => el.nota

const media = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el) / array.length
    }
    else {
        return acc + el
    }
}

console.log(
    alunos
        .filter(bomAluno)
        .map(Notas)
        .reduce(media)
)