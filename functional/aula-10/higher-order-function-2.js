//curring
function finalPrice(tax, price) {
    return function(price) {
        return price * (1 + tax)
    }

}

const spFinalPrice = finalPrice(0.075)

console.log(spFinalPrice(30))