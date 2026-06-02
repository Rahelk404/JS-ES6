const salaries = [20000, 30000, 25000, 15000];

const total = salaries.reduce((x,y) => x + y , 0);
console.log(total);