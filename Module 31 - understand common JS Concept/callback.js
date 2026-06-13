// callback

function pakhibhai(callMeBack,patro, patri){
    console.log('value of patro:', patro);
    // console.log('callMeBack Parameter', callMeBack);
    if(patri){
        // console.log(callMeBack);
        callMeBack(patro);
    } else{
        console.log('tor kopale bia nai');
    }
}


function callSomeOne(person){
    console.log('Calling:', person);
}

// callSomeOne('jodu')

pakhibhai(callSomeOne, 'jodu', 'modu')


// addEventListener('click', () => {

// })

const addFive = x => x + 5;
const resultCall = [1, 2, 3, 4].map(addFive)

console.log(resultCall);

