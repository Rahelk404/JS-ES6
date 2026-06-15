class Owner {
    ownerName;
    ownerAge;
    constructor(name, age){
        this.ownerName = name;
        this.ownerAge = age;
    }
    ownerInfo(){
        console.log(`OwnerName: ${this.ownerName}. ownerAge: ${this.ownerAge}`);
    }
}

class Animal extends Owner {
    name;
    color;
    
    constructor(petName, petColor, wName, wAge){
        super(wName, wAge)
        this.name = petName;
        this.color = petColor;
    }

    showInfo(){
        console.log(`My pet name is ${this.name}. color is ${this.color}`);
    }
}

const cat = new Animal("Travis", "white", "Rahel", 20);
cat.showInfo();
cat.ownerInfo();