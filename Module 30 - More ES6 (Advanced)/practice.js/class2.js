class Car {
    constructor(name, brand, price){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.location = 'Country not available';
    }

    premium(){
        console.log('This car is our premium collection');
    }
    stockOut(){
        console.log('item not available');
    }
    upcomming(){
        console.log('Just wait few time... cooming soon....');
    }
}

const car1 = new Car('BMW', 'BMW Group', 40000000);
car1.premium();

console.log(car1);

const car2 = new Car('honda', 'Toyota', 3000000);
car2.stockOut();

console.log(car2);

const car3 = new Car('Auto Rickash', 'Bhangari Brand');
car3.upcomming();

console.log(car3);