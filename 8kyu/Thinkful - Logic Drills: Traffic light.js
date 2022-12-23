function updateLight(current) {
    switch (current) {
        case 'green': {
            return 'yellow'
        }
        case 'yellow': {
            return 'red'
        }
        case 'red': {
            return 'green'
        }
    }

    //your code here!


}

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))