const countingSheep = function(flock) {
    if(flock === 0) {
        return console.log('All sheep jumped over the fence!')
    }
    console.log( `${flock}: Another sheep jumps over the fence!`)
    countingSheep(flock - 1)
}

countingSheep(3)

const powerCalculator = function (base, exponent) {
    if (exponent < 0) {
        return console.log('exponent should be >= 0')
    } else if (exponent === 0) {
        return 1;
    } else {
        return (base * powerCalculator(base, (exponent - 1)))
    }
}
console.log(powerCalculator(10, 3))