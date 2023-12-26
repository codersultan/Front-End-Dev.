



// 1. Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

//solution:

let num1 = 40;
let num2 = 48;

if (num1 > num2) {
    console.log(num1 + " Num1 is maximum number.");
} else {
    console.log(num2 + " Num2 is maximum number.");
}


// 2. Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)

//solution:

let numValue = -2;

if (numValue > 0) {
    console.log(numValue + " Number is Positive.");
} else if (numValue < 0) {
    console.log(numValue + " Number is Nagetive.");
} else {
    console.log(numValue + " - Zero.");
}


// 3. Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

//solution:

let numDivisible = 87;

if (numDivisible % 10 == 0) {
    console.log("numDivisible:", numDivisible + " is divisible by 10.");
} else{
    console.log("numDivisible:", numDivisible + " is notdivisible by 10.");
}


// 4.Solve the problem with Javascript  to check whether a number is even or odd. 

//solution: by Ternary operator;

let testNum = 98;
 
(testNum % 2 == 0) ?
console.log(testNum + " is a Even Number.") 
: console.log(testNum + " is a Odd Number");


// 5. Solve the problem with Javascript  to check whether a character is in the alphabet or not.

// solution:

// function isAlphabet(char) {
//     return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')

// }

 // console.log(isAlphabet('$'));


//solution-2:

function isAlphabet(char) {
    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        console.log(char + ' is an alphabet');
    } else {
        console.log(`${char} is not an alphabet`);
    }
}

// let alphabet = '#';
// isAlphabet (alphabet);

isAlphabet('w');




// 6. Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

//solution: 

let temp = 26;

if (temp >= 30) {
    console.log("Temperature is hot.");
} else if (temp <= 25) {
    console.log("Temperature is cold.");
} else{
    console.log("It's normar temperature.");
}


// 7. Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

//solution:

let a = 7;
let b = 8;
let c = 9;

if (a >=b && a >= c) {
    console.log("a", a + "is maximum number.");
} else if (b >=a && b >= c) {
    console.log("b", b + "is maximum number.");
} else {
    console.log("c", c + "is maximum number.");
}

//solution-2:

let numA = 223, numB = 432, numC = 3422;

function findMax(numA, numB, numC) {
    if (numA >= numB && numA >= numC) {
        return numA;
    } else if (numB >= numA && numB >= numC) {
        return numB;
    } else {
        return numC;
    }
}

let maxNumber = findMax(numA, numB, numC);

console.log("The max number is " + maxNumber);


// 8. Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

// solution:

let x = 33;

(x % 2 == 0) ? 
console.log(x + " - Even Number.") 
: console.log(x + " - Odd Number.");


// 9. Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

// solution:

let numOne = 84;
let numTwo = 25;

// if (numOne > 30 && numTwo > 30) {
//     console.log("Both number are greter than 30.");
// } else {
//     console.log("Both are not greter than 30.");
// }

(numOne > 30 && numTwo > 30) ? 
console.log("Both number > 30.") 
: console.log("Both are not > 30.");

// 10. Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

// solution-1:

let age = 20;

if (age >=13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("aNot a teenager");
}

//solution-2:

// (age >=13 && age <=19) ?
// console.log("Teenager") 
// : console.log("Not a teenager");


 

// 11. Create a program that uses the logical OR operator to check if either one of two strings str1 or str2 is equal to "JavaScript". Output a boolean result.

// solution:

let str1 = "JavaScript";
let str2 = "Python";
let str3 = "JavaScript";

let password = (str1 === str3 || str2 === str3);

console.log(password);

if (password = true) {
    console.log(password + " login successfull");
} else {
    console.log(password + " login faild");
}


// solution-2:

// function checkLanguage(str1, str2) {
//     return str1 === "JavaScript" || str2 === "JavaScript";
// }

// // Example usage:
// var str1 = "Java";
// var str2 = "Python";

// var result = checkLanguage(str1, str2);
// console.log("At least one of the strings is equal to 'JavaScript': " + result);
