//Counting Sheep
const countingSheep = function(flock) {
    if(flock === 0) {
        return console.log('All sheep jumped over the fence!')
    }
    console.log( `${flock}: Another sheep jumps over the fence!`)
    countingSheep(flock - 1)
}

countingSheep(3)

// Power Calculator
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

// Reverse String
const reverseString = function (str) {
    if (str.length === 0) {
        return '';
    } else {
        return str[str.length - 1] + reverseString(str.slice(0, (str.length - 1) ))
    }
}

console.log(reverseString('Billy'))

const nthTriangular = function(num) {
    if (num === 1) {
        return 1
    }
    return num + nthTriangular(num -1)
}

console.log(nthTriangular(6))

//Split without Array.split()
const stringSplitter = function(string, separator) {
    if (string.length === 0) {
        return []
    }
    let newString = ''
    let reducedString = ''
    let newArray = []
    for (i = 0; i < string.length; i++) {
        if (string[i] !== separator) {
             newString = newString + string[i]
            console.log('newString', newString)
        }
        else if (string[i] === string[string.length - 1]) {
            newArray = [newString, ...newArray]
        }
        else {
            reducedString = string.slice(i + 1)
            console.log('reducedString', reducedString)
            newArray  = [newString, ...stringSplitter( reducedString, separator)]
        }
    }
    console.log('newArray console =>', newArray)    
    return newArray
} 

console.log(stringSplitter('16/45/2378', '/'))

// return [ newString, ...stringSplitter(reducedString, sameSeparator)]