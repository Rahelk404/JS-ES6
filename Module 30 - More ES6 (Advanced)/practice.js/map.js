const number = [4, 8, 12, 16, 20];

// const doubleIt = [];

// for(const num of number){
//     const result = num * num;
//     doubleIt.push(result);
// }

// console.log(doubleIt);

// const doubleIt = x => x * x;
// const double = number.map(doubleIt);
// console.log(double);

const doubleIt = number.map(x => x * x);
console.log(doubleIt);

const tripple = number.map(x=> x * x * x);
console.log(tripple);

const friends = ['Shuvo', 'Hamza', 'Amir', 'Shahid'];

const nameLengths = friends.map(name => name.length);
const firstLetter = friends.map(name => name[0])


console.log(nameLengths);
console.log(firstLetter);

const result = number.map((num, index) => {
    return num * index;
});

console.log(result);