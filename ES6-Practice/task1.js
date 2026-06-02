const numbers = [10, 20, 30, 40, 50];



const add = numbers.map(x => x + 5);

console.log(add);


// for looop


let sum = [];

for(const num of numbers){
    sum.push(num + 5);
}

console.log(sum);