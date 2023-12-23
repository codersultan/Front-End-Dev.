


//var indifination:

var price;

console.log(price); //result is in undefined. 
                    // variable value should be top of the console.
                    
price = "30$";

console.log(price);

price = "50 $";

console.log(price);
console.log(price);

// we can reassign the variable value.
// JavaScript execute line by line.


//Let indifination:

let userName = "kalimi";

console.log(userName);

userName = "Sultan";

console.log(userName);
console.log(userName);

// we can reassign the variable value also on Let.


// Different between Var and Let:

// 1. For let need to define the variable first then variable value.

// personName = "Mushiur";
// let personName;
// console.log(personName);


personUserName = "Muhammad";
var personUserName;
console.log(personUserName);

// 2. On Let -> there no-relation under scope and outside of scope.
//    On Var -> Can define Global variables.

let sunTemp = 34; // global variable

{
    let sunTemp = 30; // locul variable
    console.log("scope:", sunTemp);
}

console.log("outside scope:", sunTemp);


var mobileBrand = "iPhone";

{
    var mobileBrand = "Oppo";
    console.log("scope:", mobileBrand);
}

console.log("outside scope;", mobileBrand);


//const / constant: Fixed 
// can't be reassing variable name or value

const name = "Jasika";
// const name = "Jasika";

console.log(name);

