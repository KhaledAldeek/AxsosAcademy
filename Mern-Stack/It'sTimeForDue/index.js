class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if (target instanceof Unit) {
            console.log(this.name + " attacks " + target.name + "!");
            target.res -= this.power;
            if (target.res < 0) {
                target.res = 0;
                console.log(target.name + "'s res is now " + target.res + " !");
            } else {
                console.log(target.name + "'s res is now " + target.res + " !");
            }
        } else {
            throw new Error("Target must be a Unit");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text) {
        super(name, cost);
        this.text = text;
        let arr = text.split(' ');
        this.magnitude = arr[0];
        this.stat = arr[3];
        this.amount = Number(arr[5]);
    }

    play(target) {
        if (target instanceof Unit) {
            console.log(target.name + " used " + this.name + " Effect!");
            if (this.magnitude === "Raise") {
                if (this.stat === "power") {
                    target.power += this.amount;
                    console.log(target.name + "'s power is now " + target.power + " !");
                } else if (this.stat === "resilience") {
                    target.res += this.amount;
                    console.log(target.name + "'s res is now " + target.res + " !");
                }
            } else if (this.magnitude === "Lower") {
                if (this.stat === "power") {
                    target.power -= this.amount;
                    if (target.power < 0) {
                        target.power = 0;
                        console.log(target.name + "'s power is now " + target.power + " !");
                    } else {
                        console.log(target.name + "'s power is now " + target.power + " !");
                    }
                } else if (this.stat === "resilience") {
                    target.res -= this.amount;
                    if (target.res < 0) {
                        target.res = 0;
                        console.log(target.name + "'s res is now " + target.res + " !");
                    } else {
                        console.log(target.name + "'s res is now " + target.res + " !");
                    }
                }
            }
        } else {
            throw new Error("Target must be a Unit");
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hA = new Effect("Hard Algorithm", 2, "Raise the target's resilience by 3");
const uPR = new Effect("Hard Algorithm", 1, "Lower the target's resilience by 2");
const pP = new Effect("Hard Algorithm", 3, "Raise the target's power by 2");

hA.play(redBeltNinja);
uPR.play(redBeltNinja);
pP.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);