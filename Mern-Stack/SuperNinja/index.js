
class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Hello, ${this.name}!`);
    }

    showStats(){
        console.log("Name: "+this.name+", Health:"+this.health+", Speed: "+this.speed+", Strength: "+this.speed);
    }

    drinkShake(){
        this.health += 10;
    }

    setStrength(strength){
        this.strength = strength;
    }

    setSpeed(speed){
        this.speed = speed;
    }
}


class SensiNinja extends Ninja{
    constructor(name) {
        super(name, 200);
        this.setStrength(10);
        this.setSpeed(10);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


const  superSensiNinja = new SensiNinja("Master Splinter");
superSensiNinja.speakWisdom();
superSensiNinja.showStats();