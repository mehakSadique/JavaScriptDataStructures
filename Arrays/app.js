const names= ['Max','Manu','Julie','Max'];
console.log(names[1]);
console.log(names.length);
for(const el of names){
    console.log(el);
}
names.push('Julie');
console.log(names);
console.log(names.length)
names.find(el => el === 'Julie');
const julieIndex = names.findIndex(el => el === 'Julie');
names.splice(2,1);
console.log(names);