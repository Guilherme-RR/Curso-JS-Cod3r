
function exec (fn, a, b) {
    return fn(a, b)
}

const somaTerminal = (x, y) => console.log(x + y)
const subTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somaTerminal, 10, 15)
exec(subTerminal, 100, 50)

const r = exec(subtrair, 15, 3)
console.log(r)

setInterval(function () {
    console.log('Exec 3...')
}, 500)