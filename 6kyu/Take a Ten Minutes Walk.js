function isValidWalk(walk) {
    let counter = 0
    if (walk.length !== 10) {
        return false
    } else {
        walk.forEach(el => {
            switch (el) {
                case 'n': {
                    return counter--
                }
                case 'w': {
                    return counter--
                }
                case 's': {
                    return counter++
                }
                case 'e': {
                    return counter++
                }
            }

        })
    }

    return counter === 0;

}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['w']))