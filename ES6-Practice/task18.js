const marks = [50, 60, 70, 80, 90];

const result = marks.map((x) => {
    if(x < 70){
        return 'Fail';
    } else{
        return 'Pass';
    }
})

const ternary = marks.map(x => x < 70 ? 'Fail' : 'Pass');

console.log(result);

console.log(ternary);