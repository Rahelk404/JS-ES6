const numbers = [4, 8, 2, 3, 5];


// const doubled = [];

// for(const num of numbers){
//     const result = num * 2;
//     doubled.push(result);
// }

// const doubleIT = x => x * 2;
// const doubled = numbers.map(doubleIT)

const doubled = numbers.map(x => x * 2);

const fiveTimes = numbers.map(num => num * 5);
const squared = numbers.map(x => x * x);

const friends = ['zaved', 'pavel', 'Noble', 'kodbel'];

const nameLenghts = friends.map(name => name.length)
const firstLetter = friends.map(name => name[0].toLowerCase());
const result = numbers.map((num, index) => {
    console.log(num * index);
    return num * index; 
})

// console.log(doubled);
// console.log(fiveTimes)
// console.log(squared)
// console.log(nameLenghts);
// console.log(firstLetter);

console.log(result)