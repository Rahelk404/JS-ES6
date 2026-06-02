const person = {
    name: 'Hasan',
    age: 25
}

Object.seal(person);

person.salary = 5000;
delete person.name;

person.age = person.age + 5;

console.log(person);

// -------------------------------

const person2 = {
    name: 'Jahid',
    age: 30,
    salary: 30000
}

Object.freeze(person2);

person2.salary = person2.salary + 5000;
 delete person2.age;

 console.log(person2);