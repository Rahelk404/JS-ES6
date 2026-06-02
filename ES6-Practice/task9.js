const oldNumbers = [1, 2, 3, 4];

const newNumber = [5, 6, 7];

const newArr = [...oldNumbers, ...newNumber];
const newArr2 = [...oldNumbers, newNumber]

console.log(newArr, newArr2);