function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}


//additional way:
function pizzaOven2(crust, sauce, cheese, toppings) {
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
}

function pizzaOven3(crust, sauce, cheese, toppings){
    var pizza = {
        crust: crust,
        sauce: sauce,
        cheese: cheese,
        toppings: toppings
    }

    return pizza;
}

function randomPizza() {
    //const just for Not able to re assign or redeclare
    const crusts = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
    const sauces = ["traditional", "marinara", "pesto", "barbecue"];
    const cheeses = ["mozzarella", "cheddar", "feta", "parmesan"];
    const toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "spinach", "bacon", "pineapple", "jalapenos", "chicken"];

    var pizza = {
        crust: crusts[Math.floor(Math.random() * crusts.length)],
        sauce: sauces[Math.floor(Math.random() * sauces.length)],
        cheese: [cheeses[Math.floor(Math.random() * cheeses.length)]],
        toppings: [toppings[Math.floor(Math.random() * toppings.length)]]
    }


    return pizza;
}



var p1 = new pizzaOven2("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1 details: \n" + JSON.stringify(p1));

console.log("--------------------------------------------------------------------------------");

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2 details: \n" + JSON.stringify(p2));

console.log("--------------------------------------------------------------------------------");

var p3 = new pizzaOven2("thin crust", "pesto", ["parmesan", "mozzarella"], ["chicken", "spinach"]);
console.log("Pizza 3 details: \n" + JSON.stringify(p3));

console.log("--------------------------------------------------------------------------------");

var p4 = pizzaOven3("stuffed crust", "barbecue", ["cheddar"], ["bacon", "pineapple", "jalapenos"]);
console.log("Pizza 4 details: \n" + JSON.stringify(p4));

console.log("--------------------------------------------------------------------------------");

var p5 = randomPizza();
console.log("Random pizza details: \n" +JSON.stringify(p5));