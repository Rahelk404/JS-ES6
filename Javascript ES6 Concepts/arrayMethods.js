// const numbers = [10, 20, 30, 40, 50];

// forEach, map, find, filter, reduce;

// for(let item of numbers){
//     console.log(item);
// }

// numbers.forEach((item) => console.log(item))
// numbers.map(item => console.log(item))

// const numbers = [10, 20, 30, 40, 50];

// const a = numbers.forEach(item => item);
// console.log(a);

// const b = numbers.map(item => item + 1);
// console.log(numbers);
// console.log(b);

// const numbers = [10, 20, 30, 40, 50];
// const x = numbers.find(item => item === 30);
// console.log(x);

const numbers = [10, 21, 30, 41, 50];
const filter = numbers.filter(item => item % 2 === 0);
console.log(filter);

const nums = [1, 2, 3, 4, 5,];

// let sum = 0;
// for(let item of nums){
//     sum += item;
// }

// console.log(sum);

/* 
pre + current = total;
0   +   1     = 1
1   +   2     = 3
3   +   3     = 6
6   +   4     = 10
10  +   5     = 15

*/

const sum = nums.reduce((preValue, currentValue) => preValue + currentValue, 0);
console.log(sum);