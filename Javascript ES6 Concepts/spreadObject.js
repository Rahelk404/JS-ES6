const person = {
    name: "Hero Alom",
    age: 34,
    phone: "+88 00 8785 2323 77",
    address: {
        zilla: "SG",
        village: "Not available"
    },
    p:[1, 2, 3, 4]
}




const person1 = {...person};
person1.email = 'Hello@mail.com'

console.log(person);
console.log(person1);


/* Object Destructuring */
const {phone:mobile, address, name:amarNam } = person;
// const {zilla} = address;
console.log(mobile);
// console.log(zilla);
console.log(amarNam);
const {address:{zilla}} = person;
console.log(zilla);


const {p, name, ...rest} = person;
console.log(rest);
console.log(name);

