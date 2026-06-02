const student = {
    name: 'Rafid',
    1: 50,
    'home-address': 'kochu kkhet',
    marks: 90
}


//dot notation
const studentName = student.name;

// bracket Notation
const studentOne = student['name'];
const studentAddr = student['home-address'];

console.log(student);
console.log(studentOne);


console.log(student['home-address']);

for(const key in student){
    const value = student[key];
}

const propName = 'marks';
console.log(student[propName]);