let x = 5;
let y = [1, 2, 3];

const modify = (a) =>{
    a = a+2;
    console.log(a);
}
const modify1 = (a) =>{
    a.push(22);
    console.log(a);
}

// modify(x);
modify1(y)
console.log(y);