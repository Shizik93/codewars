/*
const pow = (n) => {
if(n===0){
    return 1
}
return n*pow(n-1)
}
console.log(pow(5))*/

/*
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const listReader=(list)=>{
    console.log(list.value)
    if(list.next){
       listReader(list.next)
    }

}
listReader(list)*/


/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const listReader = (list) => {
    if(list.next){
        listReader(list.next)
    }
    console.log(list.value)


}
listReader(list)*/

/*

const factorial = (n) => {
    debugger
    if (n === 1) {
        return 1
    }
    return n * factorial((n - 1))
}
console.log(factorial(5))*/


/*
const sumTo=(n)=>{
    debugger
    if(n===1){
        return 1
    }
    return n+sumTo(n-1)

}
console.log(sumTo(4))*/
/*
const o = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
};

const newO=JSON.stringify(o)
const aaa=JSON.parse(newO)
console.dir(o)
console.dir(aaa)*/


/*const obj = {
    a: 7,
    b: '12',
    c: 2323,
    d: [1, 2, 3, 4],
    e: {
        ab: 1,
        bc: 'sdsd'
    },
    f: function (x) {
        return x + x
    }
}

const newObj = JSON.stringify(obj)
console.dir(obj)
console.log(newObj)
console.dir(JSON.parse(newObj))*/

/*function toCamelCase(str) {
    if(!str){
        return ""
    }
    const array = str.split('')
    const foo = (array) => {
        return array.map((el, index) => {
            if (index === 0) {
                return el
            }
            return el.charAt(0).toUpperCase() + el.slice(1)
        }).join('')


    }
    let cameCaseString
    if (array.find((el) => el === '_')) {
        cameCaseString = foo(str.split('_'))
    } else {
        cameCaseString = foo(str.split('-'))
    }
   return cameCaseString


}*/


/*const foo = (array) => {
    return array.map((el, index) => {
        if (index === 0) {
            return el
        }
        return el[0].toUpperCase() + el.slice(1)
    }).join('')


}*/


/*function queueTime(customers, n) {
const arr = new Array(n).fill(0);
    console.log(arr)
    if (n === 1) {
        console.log(customers.reduce((acc, el) => acc + el))
    }
    else if(n>=customers.length){
        console.log(Math.max(...customers))

    }

}
queueTime([1, 2, 3, 4], 5)*/

/*const foo=(customers,tillCount)=>{

    let tills = Array(tillCount <= 0 ? 1 : tillCount).fill(0);
    console.log(tills)
    customers.forEach(customer => {
        const fastest = tills.indexOf(Math.min(...tills));
        console.log(fastest,'fastest')
        console.log( tills[fastest] += customer ,'tills[fastest] += customer');
    });
    return Math.max(...tills);
}


console.log( foo([2, 3, 10, 2,2,3,5,6,7,10], 2))*/




























