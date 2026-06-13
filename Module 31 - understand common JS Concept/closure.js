// function counter (){
//     let count = 0;
//     function innerFunction(){
//         console.log('inside the inner function someone call me');
//     }
//     return innerFunction;
// }

// const output = counter();
// console.log(output());


function counter() {
    let count = 10;

    return function (user) {
        count = count + 1;
        console.log('inside the inner function', user, count);
    }
}

const innerFunc = counter();

// innerFunc();
// innerFunc();
// innerFunc();

const rahimCounter = counter();
rahimCounter('Rahim');
rahimCounter('Rahim');
rahimCounter('Rahim');
rahimCounter('Rahim');
console.log('--------------------');

const karimCounter = counter();
karimCounter('Karim');
rahimCounter('rahim');


const jabbarCounter = counter();
jabbarCounter('Jabbar');
jabbarCounter('Jabbar');
rahimCounter('Rahim');
karimCounter('karim');