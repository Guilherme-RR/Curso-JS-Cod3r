function range (a, b, c = 1) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const ritmo = n1 <= n2 ? Math.abs(c) : -Math.abs(c)

    const nums = []
    for(let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i+= ritmo) {
        nums.push(i)
    }
    return nums
}

//Mostra a sequência numérica de 1 até o valor inserido em ordem crescente.
console.log(range(5))

//Mostra a sequência numérica do primeiro valor até o segundo em ordem crescente.
console.log(range(6, 10))

//Mostra a sequência numérica do primeiro valor até o segundo, porém em um ritmo definido pelo terceiro valor.
//No exemplo abaixo, o ritmo é de 10 em 10.
console.log(range(10, 100, 10))

//Mostra a sequência numérica do primeiro valor até o segundo em ordem decrescente.
console.log(range(10, 1))

//Mostra a sequência numérica do primeiro valor até o segundo, porém usando número negativo.
console.log(range(5, -5, 5))