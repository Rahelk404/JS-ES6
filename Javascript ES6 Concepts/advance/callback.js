
// function show(name, age){
//    console.log("my name is:", name, "age is:", age);
// }

// function fun1(name, age, callback){
//     console.log('Hello from first function');
//     setTimeout(() => {
//     callback(name, age);
     
//     }, 2000)
// }

// fun1("Rahel", 23, show);


function a (){
    console.log("hello from callback");
}

function main(callback){
    callback()
}

main(a);