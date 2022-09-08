function findUniq(arr) {
  arr.sort((a, b) => a - b)
  const first = arr.filter(el => el === arr[0])
  const last = arr.filter(el => el === arr[arr.length - 1])
  if (first.length > 1) {
    return last[0]
  } else {
    return first[0]
  }
}


console.log(findUniq([0, 1, 0]))
console.log(findUniq([0, 0, 1]))
console.log(findUniq([1, 1, 1, 2, 1, 1]))
console.log(findUniq([1, 1, 2, 1, 1]))
console.log(findUniq([3, 10, 3, 3, 3]))
