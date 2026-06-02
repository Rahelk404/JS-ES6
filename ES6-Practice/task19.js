class Car {
    constructor(name, brand, price){
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    start(){
        console.log('Car engine is on');
    }
    stop(){
        console.log('car engine is stop');
    }
}

const car1 = new Car('cyber truck', 'Tesla', 200000);
const car2 = new Car('Civic', 'Honda', 30000);
const car3 = new Car('Corolla', 'Toyota', 25000);


car1.start();
car2.stop();
car3.start();

console.log(car1, car2, car3);