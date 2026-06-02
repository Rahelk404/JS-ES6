class Vehicle {
    #tin;  // for hidden or private / encapsulation
    constructor(type, brand, price){
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.#tin = '1234QWEA';
    }
    getThis(){
        console.log(this);
    }
    getPrice(){
        return this.price;
    }
    getTin(){
        return this.#tin;
    }
}

const car1 = new Vehicle('car', 'honda', 500000);
const car2 = new Vehicle('car', 'toyota', 400000)
// car1.getThis();

// console.log(car2.getPrice());
// console.log(car1.getPrice());

const student = {
    name: 'Rahel',
    score: 10000,
    getScore: function (){
        console.log(this);
    }  ,
    getScoreArrow: () =>{
        console.log(this);
    }
}

student.getScore();
student.getScoreArrow();