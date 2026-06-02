const number = [2, 3, 5, 7, 9, 11, 13, 15, 4, 6, 8, 10, 20, 30, 40, 50];

const greaterThan = number.filter(x => x > 10);
const getEven = number.filter(x => x % 2 === 1);

console.log(getEven);


console.log(greaterThan);
