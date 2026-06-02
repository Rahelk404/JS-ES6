class Vehicle {
        constructor(type, brand, price){
            this.type = type;
            this.brand = brand;
            this.price = price;
        }

        getThis(){
            console.log(this);
        }
        getPrice(){
            console.log(this.price);
        }
}

const price1 = new Vehicle('Toyoda', 'Honda', 50000)
price1.getPrice();
price1.getThis();

console.log(price1);

const student = {
     name: 'Rahel Khan',
     score: 2000,
     getScore: function(){
        console.log(this);
     },
     getScoreArrrow: () => {
        console.log(this);
     }
}

student.getScore();
student.getScoreArrrow();
