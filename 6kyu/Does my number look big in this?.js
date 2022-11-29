function narcissistic(value) {
    const arrayNumbers=value.toString().split('')
    const number= arrayNumbers.reduce((acc,el)=>{
        return (Number(el)**arrayNumbers.length)+acc
    },0)
    return value === number;

}

console.log(narcissistic(7))
console.log(narcissistic(153))
console.log(narcissistic(675))