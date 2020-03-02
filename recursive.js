//Counting Sheep
const countingSheep = function(flock) {
  if(flock === 0) {
    return console.log('All sheep jumped over the fence!');
  }
  console.log( `${flock}: Another sheep jumps over the fence!`);
  countingSheep(flock - 1);
};

countingSheep(3);

// Power Calculator
const powerCalculator = function (base, exponent) {
  if (exponent < 0) {
    return console.log('exponent should be >= 0');
  } else if (exponent === 0) {
    return 1;
  } else {
    return (base * powerCalculator(base, (exponent - 1)));
  }
};
console.log(powerCalculator(10, 3));

// Reverse String
const reverseString = function (str) {
  if (str.length === 0) {
    return '';
  } else {
    return str[str.length - 1] + reverseString(str.slice(0, (str.length - 1) ));
  }
};

console.log(reverseString('Billy'));

const nthTriangular = function(num) {
  if (num === 1) {
    return 1;
  }
  return num + nthTriangular(num -1);
};

console.log(nthTriangular(6));

//Split without Array.split()
const stringSplitter = function(string, separator) {
    let sepIndex = string.indexOf(separator);
    
    if (sepIndex === -1) {
        return [string];
    } else {
        return [string.slice(0, sepIndex)].concat(stringSplitter(string.slice(sepIndex + separator.length), separator))
    }

} 
console.log(stringSplitter('16/45/2378', '/'))

//Fibonacci 

const fibo = function (number) {    
  if (number <= 0) {
    return 0;
  } 
  if (number <= 2) {
    return 1;
  } else {
    return fibo(number - 1) + fibo(number - 2)};
};

const arr = []
let fibNum = 5

for (let i = 1; i <= fibNum; i++) { 
        arr.push(fibo(i)) 
    } 

console.log(arr);

//Factorial
const factorialFinder = function(num) {
    if (num <= 1) {
        return 1
    }

    return num * factorialFinder(num - 1)
}

console.log(factorialFinder(5))

//Maze
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const aMazeingTime = function (maze, indexRow, indexColumn, route) {
   const route = ''
   if(maze[indexRow][indexColumn] === 'e'){
       return 'Yay we done!'//go back to this later
   }
   if(maze[indexRow][indexColumn] === '*'){
        if(route[route.length -1] === 'D') {
            route[route.length] = 'U'
        }
   }
}

//if maze[currentIndex + 1][currentIndex + 1] === ' '
//currentIndex = currentIndex + 1 

const obj = {Zuckerberg: {Schroepfer: }}
