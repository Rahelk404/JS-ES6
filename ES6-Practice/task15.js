class Employee {
    constructor(name, id, salary, designation){
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.designation = designation;
    }

    getDetails(){
        console.log(`${this.name} is a active worker. Employee id is ${this.id}`);
    }
    calculateBonus(){
        const bonus = this.salary * 0.2;
        const total = this.salary + bonus;
        console.log(`The employee salary is: ${this.salary}. The Employee Bonus amount: ${bonus}. Total salary is ${total}`);
    }
}

class Manager extends Employee {
    constructor(name, id, salary, designation, teamSize, department){
        super(name, id, salary, designation);
        this.teamSize = teamSize;
        this.department = department;
    }
    conductMeeting(topic){
        console.log(`Manager ${this.name} is conducting a meeting for ${this.department} department about: ${topic}`);
    }
    approveLeaveMessage(employeeName){
        console.log(`Manager ${this.name} has approved the leave for ${employeeName}`);
    }
}

const manager1 = new Manager('Rahim', 1200, 20000, 'Executive Manager', 10, 'Development');
manager1.conductMeeting('Project Sprint');
manager1.approveLeaveMessage('Karim');
manager1.getDetails();
manager1.calculateBonus();

console.log(manager1);

const manager2 = new  Manager('Hamim', 1211, 30000, 'Senior Manager', 10, 'Development');
manager2.getDetails();
manager2.calculateBonus();
manager2.conductMeeting('DataBase')
manager2.approveLeaveMessage('Jalil');


console.log(manager2);

