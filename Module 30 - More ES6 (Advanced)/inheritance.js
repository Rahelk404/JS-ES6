class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal{
    constructor(name, breed, age){
        super(name, age);
        this.breed = breed;
    }  

    bark(){
        console.log((`${this.name} is barking}`));
    }
}

class Cat extends Animal{
    constructor(name, color, age){
        super(name, age)
        this.color = color;
    }

    meaw(){
        console.log((`${this.name} is meowing}`));
    }
}

class Bird{
    constructor(name, species, age){
        this.name = name;
        this.age = age;
        this.species = species;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
    fly(){
        console.log((`${this.name} is flying`));
    }
}

const dog1 = new Dog('coffee','Deshi', 2)
dog1.eat();

const cat1 = new Cat('SP', 'white', 5)
cat1.eat();

// const bird1 = new Bird('Kokil', 'deshi', 2)
// bird1.fly();

console.log(dog1);