function solution(string) {
    const arr = []
    string.split('').forEach((el, ind) => {
        if (el === el.toUpperCase()) {
            arr.push(ind)

        }
        return el

    })
    if (arr.length === 0) {
        return string
    } else {
        const arr2 = []
        arr.forEach((el, index) => {
            if (index === 0 && el !== 0) {
                arr2.push(string.slice(0, el))
            }
            arr2.push(string.slice(el,arr[index+1]))
        })

        return arr2.join(' ')
    }
}

const solution2=(string)=>{
    return string.split('').map(el=>{
        if(el===el.toUpperCase()){
            return ' '+el
        }
        return el
    }).join('')
}

console.log(solution("camelCasing"))
console.log(solution('camelCasingTest'))

console.log(solution2("camelCasing"))
console.log(solution2('camelCasingTest'))