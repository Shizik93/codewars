function moveZeros(arr) {
    const filterArray=arr.filter(el=>el!==0)
    const zeroArray=arr.filter(el=>el===0)
    return  filterArray.concat(zeroArray)
}
moveZeros([false,1,0,1,2,0,1,3,"a"])
