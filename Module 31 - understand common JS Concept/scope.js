const name = 'Tom Hanks';
if(true){
    const data = 58;
    console.log('inside the if block:',data, name);
    doMath(88, 99);
    
}

// console.log(data);

// while(true){
//     console.log(true);
// }

for(const num of [1,2, 3, 4, 5, 6]){

}

// function scope or local scope;

function doMath(a, b){
    console.log(a, b);
    const sum = a + b;
    const total = sum + 10;
    // console.log('calling double it:', dobuleIt(450));
    function dobuleIt(x) {
        return x * 2;
    }
}

// console.log('calling double it:', dobuleIt(450));

// console.log(a, b);


console.log(location);

var location = 'balur Ghat';
// let location = 'balur Ghat';

