class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
    }

    goal(){
        console.log('score a goal');
    }
    getTeam(){
        return 'barsa';
    }
}

const player1 = new Player('Rahel Khan', 20);
player1.goal();
const class2 = new Player('Rayhan', 40);
class2.getTeam();


console.log(class2);


console.log(player1);