const student = {
    name: 'Hasan Ali',
    age: 20,
    address: 'Bangladesh',
    // occupation: {
    //     title: 'AI Cooder',
    //     designation: 'QA',
    //     work: 'remote JOB',
    //     family: {
    //         mother: 'Noor Jahan',
    //         father: 'Ali Al Hasan',
    //         brother: 'Hashem Ali',
    //         sister: 'Noora Ali'
    //     }
    // }
}

console.log(student.occupation?.family?.mother)