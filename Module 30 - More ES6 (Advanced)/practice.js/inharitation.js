class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}


class Dog extends Animal {
    constructor (name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} is barking`);
    }
}


const dog1 = new Dog('Tommy', 'Mix', 2);
dog1.eat();
dog1.bark();
console.log(dog1);


class Bird extends Animal{
    constructor(name, age, species){
        super(name, age);
        this.species = species;
    }

    fly(){
        console.log(`${this.name} is flying`);
    }
}

const bird = new Bird('tuni', 23, 'desi');
bird.fly();
console.log(bird);

class Cat extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    meow(){
        console.log(`${this.name} is meowing`);
    }
}

const cat1 = new Cat('mimu', 3, 'deshi');
cat1.meow();
cat1.eat();
console.log(cat1);