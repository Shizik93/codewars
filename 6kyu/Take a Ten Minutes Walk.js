function isValidWalk(walk) {
    let counterX = 0
    let counterY = 0
    if (walk.length !== 10) {
        return false
    } else {
        walk.forEach(el => {

            switch (el) {

                case 'n': {
                    counterY--;break
                }
                case 'w': {
                    counterX--;break
                }
                case 's': {
                    counterY++;break
                }
                case 'e': {
                    counterX++;break
                }
            }

        })
    }

    return counterX ===0 && counterY === 0

}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['w']))