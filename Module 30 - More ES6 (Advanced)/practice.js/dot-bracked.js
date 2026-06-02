    const student = {
        name: 'Rahel Khan',
        1: 50,
        'home-address': 'Sylhet',
        marks: 90
    }

// dot notation

const studentName = student.name;

// bracket notation

const studentNumber = student['1'];
const studentAddr = student['home-address'];
x



// console.log(studentName);
// console.log(studentNumber);
// console.log(studentAddr);

const keys = Object.keys(student);

for(const key of keys){
    const value = student[key];
    console.log(value);
}

const propName = 'marks';
// console.log(student[propName]);