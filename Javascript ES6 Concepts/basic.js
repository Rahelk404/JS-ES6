// primitive data type

const x = 5;
const y = true;
const a = 'Hello';

let z = x;
z = 10;

console.log("x =", x);
console.log("z =", z);

// Non primitive data type

const b = { name: 'Rahel' }
const nums = [1, 2, 3];

let num1 = nums;
num1.push(4);
nums.push(5)
console.log('num1:', num1);
console.log('nums:', nums);

const c = b;
c.age = 25;

console.log('C:', c);
console.log('B:', b)


/* truthy & falsy value: */

// falsy value => false, 0, "", Null,  undefined, NaN
// truthy value => "Mehedy",  1234, 1, [], {}

const value = " ";  // after space it will be truthy value
console.log(!!value);

const value2 = [];
console.log(!!value2);
