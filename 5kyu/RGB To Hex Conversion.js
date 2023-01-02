function rgb(r, g, b) {
    const arr = []
    arr.push(r, g, b)
    const newArr = arr.map(el => {
        if (el <= 0) {
            return '00'
        }
        else if(el.toString(16).length===1){
            return '0'+el.toString(16)
        } else if (el > 255) {
            const x=255
            return x.toString(16)
        } else {
            return el.toString(16)
        }
    })

    return newArr.join('').toUpperCase()


}

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0, 0, 0) // returns 000000
rgb(0,10,109) // returns 9400D3