function findOdd(A) {
    let currentNumber
    A.map(el => {
        const array = A.filter(num => num === el)
        if (array.length % 2 !== 0) {
            currentNumber = array[0]
        }
    })

    return currentNumber;
}

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))