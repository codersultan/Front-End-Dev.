



//JS Number Methord:

let num1 = 23; // Round Number / Natural number/ Integer number.
let num2 = 36.89234; // Decimal/ Floating numbers.

let addition = num1 + num2;

console.log("Addition:", addition);


// toFixed() Methord: Can control how many decimal value should show after dot (.) :

console.log("toFixed", addition.toFixed(2));

//NB: Output is string.


// Round Number -> Math.round():

    // Decimal to Round Number
    // Decimal value > .5 -> Round Number - Next Value;
    // Decimal value < .5 -> Round Nuber - Previous value.
    // 12.52 -> 13 / 15.45 -> 15

let roundNumber = Math.round(addition);
console.log("RoundNumer:", roundNumber);


// Math.ceil: 
    //whatever the decimal value is the result should always be on the upper level. 14.23 -> 15

let ceilNumber = Math.ceil(addition);
console.log("ceilNumber:", ceilNumber);


// Math.floor:
    //whatever the decmal value is the result should always same round number. 14.24 / 14.98 -> 14

    let floorNumber = Math.floor(addition);
    console.log("floorNumber:", floorNumber);
    

// Math.abs():
    // Turns negative number to positive value.

    let newNumber = -47;
    console.log("Absolute Value:", Math.abs(newNumber));


// parseInt(): convert flooting poin number to Integer Number.
    // convert srting to number.

    let number = "34.86";
    console.log(typeof(number));

    console.log("Parse Int", parseInt(number));

// parseFloat(): convrt to a decimal value;
    console.log("Parse Float", parseFloat(number));


// Math.random(): 0-1 random value 

let randomNumber = Math.random();
console.log(randomNumber.toFixed(2));

    // Dice Game:
    let diceNumber = Math.random() * 6+1;
    console.log("Random Dice Number:", Math.floor(diceNumber));

    // 4 Digit OTP genarete;
    let otpNumber = Math.floor(Math.random() * 9000 + 1000);
    console.log("Random otp", otpNumber);
