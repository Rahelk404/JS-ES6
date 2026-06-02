const number = [2, 4, 6, 8, 10, 20, 30, 40, 50];

console.log(number);

const arrfunc = x => x * 2;
const double = number.map(arrfunc);
console.log(double);


const doubleIt = number.map(x => x * x);
console.log(doubleIt);

const friends = ['abid', 'jabed', 'khalid', 'omor'];

const nameLength = friends.map(friend => friend.length)
console.log(nameLength);

const firstLetter = friends.map(friend => friend[0].toLowerCase());
console.log(firstLetter);

const result = number.map((x, y) => {
    return x * y;
})

console.log(result);