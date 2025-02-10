const resultData=new Map();
resultData.set('average', 1.5);
resultData.set('lastResult', null);

const germany={name:'Germany', population: 82};
resultData.set(germany, 0.89);

for (const el of resultData){
    console.log(el)
}
console.log(resultData);
resultData.set('average',33.89);
console.log(resultData);
console.log(resultData.get('average'));
resultData.delete(germany);
console.log(resultData)