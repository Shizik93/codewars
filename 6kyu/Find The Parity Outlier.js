function findOutlier(integers) {

  let even = 0
  let notEven = 0
  const sliceArray = [...integers].splice(0, 3)
  sliceArray.map(el => (el % 2 === 0) ? even++ : notEven++)
  const answer = even > notEven ? integers.filter(el => el % 2 !==  0) : integers.filter(el => el % 2 === 0)
  return answer[0]

}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([2, 6, 8, 10, 3]))
