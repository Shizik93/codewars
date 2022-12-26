const reverseSeq = n => {
    const array=[]
    for (let i=1;i<=n;i++){
        array.unshift(i)
    }
    return array
};
reverseSeq(5)