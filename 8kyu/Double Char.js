function doubleChar(str) {
    const arr = []
    str.split('').forEach((el) => {
        for (let i = 0; i < 2; i++) {
            arr.push(el)
        }
    })
    return arr.join('')


}

console.log( doubleChar('String'))