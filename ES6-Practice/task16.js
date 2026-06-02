const employees = [
    {name: 'Rahim', salary: 20000},
    {name: 'Karim', salary: 35000},
    {name: 'Hasan', salary: 50000},
    {name: 'Jamal', salary: 15000}
];


const filter = employees.filter(x => x.salary >= 30000);

const map = filter.map(x => x.name);

const reduce = filter.reduce((acc,curr) => acc + curr.salary, 0);

console.log('Names:', map);
console.log("total:", reduce);


