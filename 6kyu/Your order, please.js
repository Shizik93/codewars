function order(words) {
  const str = []
  const arrayStr = words.split(' ')
  arrayStr.forEach(el => {
    debugger
    const index = el.split('').find((value) => {
      if (isNaN(Number(value))) {
        return
      }
      return value
    })
    str[Number(index-1)] = el
  })
  return str.join(' ')


}


console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))
