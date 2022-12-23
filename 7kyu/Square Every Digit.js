const squareDigits=num=>Number(num.toString().split('').map(el=>Number(el)**2).join(''))

console.log(squareDigits(3212))