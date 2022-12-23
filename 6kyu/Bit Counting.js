const countBits=(n)=>{
    if(n===0)
    {return 0}
    let x=[]
    const foo = (n)=> {
        if(n<2){
            x.unshift(1)
            return x
        }
        else if (n%2===1){
            x.unshift(1)
            foo((n-1)/2)
        }
        else {
            x.unshift(0)
            foo(n/2)
        }



    };
    foo(n)
    let z=0
    x.forEach(el=>{
        if(el===1){
            z++
        }
    })
    return z
}
console.log( countBits(0))
console.log( countBits(11))
console.log( countBits(100))
console.log( countBits(232))