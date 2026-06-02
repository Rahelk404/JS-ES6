/**
 * class --> template
 * properties
 * method: (a special type of function inside a class without the function keyword)
 * 
 * 
 * object
 * 
*/

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';

        // console.log('callig the constructor method',name);
    }
    goal(){
        console.log("score a goal");
    }
    getTeamName(){
        return 'Barsa';
    }
}
const player1 = new Player('Rahel', 23);
const player2 = new Player('Khan');
// player1.goal();

console.log(player1);