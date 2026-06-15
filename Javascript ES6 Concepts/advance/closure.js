
// function outerFunction(){
//     let a = 1;

//     return function innerFunction(){
//         a++;
//         console.log("value in inner:", a);
//     }
// }

const outerFunction = () => {
    let count = 0;

    const inner = () => {
        count ++;
        console.log("count: ", count)
    }
    return inner;
}

const x = outerFunction();
const x1 = outerFunction();

x();
x();
x();
x1();
x();