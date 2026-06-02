class Student {
    constructor(name, roll, department) {
        this.name = name;
        this.roll = roll;
        this.department = department;
    }

    introduce(){
        console.log(`Hi, I am ${this.name}. My roll is ${this.roll} and I am from ${this.department} department.`);
    }
}

const student1 = new Student('Rahel Khan', 121 , 'Science');
student1.introduce();
console.log(student1);