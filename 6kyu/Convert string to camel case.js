function toCamelCase(str){
    str = str.split('');
    return str.map(function(el, i){
        if(el === '-' || el === '_'){
            el = str[i+1].toUpperCase();
            str.splice(i+1, 1);
        }
        return el;
    }).join('');
}

console.log(toCamelCase(""))
console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase("A-B-C"))
console.log(toCamelCase("a-Cat-wasEvil"))