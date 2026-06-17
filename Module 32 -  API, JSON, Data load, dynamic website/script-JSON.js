

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // promise of response
        .then((res) => res.json())
        // promise of json data
        .then(data => console.log(data));
}






// const person = {
//     name: 'Rahel',
//     fruit: 'Dalim',
//     dish: 'halim',
//     friends: ['Rohim', 'Jasim', 'Karim', 'Nabil'],
//     isReach: false,
//     money: 34000
// }

// console.log(person);

// // JSON -> JS Object with Notation
// // JSON.stringify -> JSON
// // JSON.parse -> OBJECT

// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// const personParse = JSON.parse(personJSON);
// console.log(personParse, typeof personParse);