// class Animal {
//     name = "travis";
//     color = "black";

//     show(){
//         console.log("Hello from class");
//     }
// }

// const cat = new Animal();
// console.log(cat.name);
// cat.show(); 


class Animal {
    name;
    color;
    constructor(petName, petColor){
        this.name = petName;
        this.color = petColor;
    }

    showInfo(){
        console.log(`My pet name is ${this.name}. color is ${this.color}`);
    }
}

const cat = new Animal("Travis", "white");
const dog = new Animal("Tom", "Black");
console.log(cat.color);
console.log(dog.color);
cat.showInfo()
dog.showInfo()