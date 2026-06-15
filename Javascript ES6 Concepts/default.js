const add = (x = 0, y = 0) => {
    console.log(x + y);
}

add();

const person = {
    name: "Rahel",
    age: 20
}

// const showInfo = (props) => {
//     const {name, age} = props;
//     console.log(name, age);
// }

const showInfo = ({name, age}) => {
    console.log(name, age);
}

showInfo(person)