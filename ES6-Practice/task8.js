const colors = ['red', 'green', 'blue', 'black'];

const first = x => x[0];
const last = x => x[x.length - 1];

console.log(first(colors));

console.log(last(colors));


const getFirstAndLast = x => [x[0], x[x.length - 1]];
const [first1, last1] = getFirstAndLast(colors);


console.log(first1);

console.log(last1);
