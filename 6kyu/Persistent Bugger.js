function persistence(num) {
  debugger
  if (num > 9) {
    return 1 + persistence(num.toString().split('').reduce((acc, el) => acc * Number(el), 1))
  } else {
    return 0
  }
}


console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(25))
console.log(persistence(999))
