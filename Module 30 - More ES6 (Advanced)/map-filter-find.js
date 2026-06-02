const student = [
    {id:1, name: 'Abul', marks: 50},
    {id:2, name: 'kabul', marks: 60},
    {id:3, name: 'Babul', marks: 95},
    {id:4, name: 'Dabul', marks: 85},
    {id:5, name: 'Sabul', marks: 15},

]

const names = student.map(students => students.marks * 0.75);
const goodStudent = student.filter(students => students.marks > 80);

const goodStudents = student.find(students => students.marks > 80);

console.log(names);
console.log(goodStudent)
console.log(goodStudents);