const number = [ 12, 2, 4, 6, 8, 10, 20, 30, 40, 50];



const total = number.reduce((acc, curr) => acc + curr);
console.log(total);