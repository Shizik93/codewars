function arrayDiff(a, b) {
    let array = a
    b.forEach((num) => {
        array = array.filter(el => el !== num)
    })
    return array
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))

console.log(arrayDiff([1, 2, 3], [1, 2]))