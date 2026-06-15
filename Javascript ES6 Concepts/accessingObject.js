const person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '00 88 5544 7575',
        mail: 'abul@mail.com'
    },
    education: {
        schoolName: 'andorkilla high school',
        subjects: [
            {name: 'bangla', marks: 45},
            {name: 'english', marks: 64},
            {name: 'math', marks: 75},
        ]
    }
}

console.log(person.education.subjects[1].name);