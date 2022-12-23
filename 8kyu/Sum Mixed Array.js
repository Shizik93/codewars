const sumMix=(x)=>x.reduce((acc,el)=>typeof el==='string'?acc+Number(el):acc+el,0)





console.log(sumMix([9, 3, '7', '3']))