var uniqueInOrder = function (iterable) {
  const arrayString = typeof iterable === 'string' ? iterable.split('') : iterable.join('').split('')
  return arrayString.reduce((acc, el, index) => {
    let lastIndex = acc.length - 1


    if (index === 0) {
      return el
    }
    if (acc[lastIndex] !== el) {
      return acc + el
    } else {
      return acc
    }

  }, '').split('').map(el => {
    if (isNaN(Number(el))) {
      return el
    }
    else {
      return Number(el)
    }
  })
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
