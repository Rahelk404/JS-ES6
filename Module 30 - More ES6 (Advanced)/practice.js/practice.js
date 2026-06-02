const person = {
    name: 'Jhony Khan',
    age: 20,
    'home-address': 'Bangladesh',
    family: {
        father: 'Hasan Ali',
        mother: 'Noor Jahan',
        // status: 'Joined Family'
    }
}

const personName = person['home-address'];
console.log(personName);

const dotNatation = person.name;
console.log(dotNatation);

const optionalChaining = person?.family?.status;
console.log(optionalChaining);

/* ------------------------------------------ */
// Array Map

const numbers = [12, 13, 15, 18, 20, 45, 31];

const arrowFunc = numbers.map(x => x* x);
console.log(arrowFunc);

const double = numbers.map(x => x * 2);
console.log(double);

const friends = ['suhel', 'Tuhel', 'Ruhel', 'Nuhel','Kamrul'];

const friendLength = friends.map(x => x.length);
console.log(friendLength);

const firstLetter = friends.map(x => x[0].toLowerCase());
console.log(firstLetter);

const result = numbers.map((num, index) => {
    return num + index;
})

console.log(result);


/* for each */

const forEachs = numbers.forEach(num => {
    const total = num * 2;
    console.log(total);
})

numbers.forEach(x => console.log(x));

/* Filter */

const filters = numbers.filter(x => x < 30);
console.log(filters);

const filters2 = numbers.filter(x => x % 2 === 1);
console.log(filters2);

const filter3 = numbers.filter(x => x % 2 === 0);
console.log(filter3);


/* find */

const find = numbers.find(x => x < 20);
console.log(find);
const find2 = numbers.find(x => x > 20);
console.log(find2);

// reduce

const reduce = numbers.reduce((x,y) => x + y);
console.log(reduce);

// class

class Player {
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getTheNumber(){
        console.log('01XXXXXXXXXXX');
    }
    getTheEmail(){
        console.log('info@mail.com');
    }
    getTheFax(){
        console.log('Fax: 0088xxxx88');
    }

}

const player1 = new Player('Kamrul', 23, 'Bangladesh');
player1.getTheEmail();
player1.getTheNumber();

console.log(player1);


// inheritance 

class Universal {
    constructor(name, address, age){
        this.name = name;
        this.address = address;
        this.age = age;
    }

    gtTheEmployee(){
        console.log(`${this.name} Got Hired`);
    }
}

class Hotel extends Universal {
    constructor(name, address, age, designation){
        super(name, address, age);
        this.designation = designation;
    }

    gotTheHired(){
        console.log(`${this.name} you got hired as hotel executive manager`);
    }
    tryNextTime(){
        console.log(`${this.name} Better Luck Next Time`);
    }
}

const employee1 = new Hotel('Lal Mia', 'BD', 23, 'QA');
employee1.tryNextTime();

const employee2 = new Hotel('Jui Rahman', 'BD', 23, 'QA');
employee2.gotTheHired();

console.log(employee1)
console.log(employee2)


// this & prototypical chain & encapsulation