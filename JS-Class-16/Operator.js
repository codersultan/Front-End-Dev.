



//Type of operators:

    // Arithmetic Op.
    // Assignment Op. 
    // Logical Op. 
    // Ternary Op. 
    // Comparison Op. 
    // Bitwise Op. 
    // Type Op. 
    

//Arithmetic Op: 
    //Addition ( + ):

    num1 = 20;
    num2 = 30;
    num3 = 2;

    let addition = num1 + num2;
    console.log(addition);


    //Subtraction ( - ):

    let subtraction = num2 - num1;
    console.log(subtraction);


    //Multiplication ( * ):

    let Multiplication = num1 * num2;
    console.log(Multiplication);

    //Division ( / ):

    let Division = num2 / num1;
    console.log(Division);

    
    //Exponentiation ( ** ): To the power:

    let Exponentiation = addition ** num3;
    console.log(Exponentiation);

    
    //Modulus ( % ): Remainder  :

    let Remainder = Multiplication % num1;
    console.log(Remainder);


    //Increment ( ++ ): Number + 1: 

    num4=100;
    num4++;
    num4++;

    console.log(num4++);


    // //Decrement ( ++ ): Number - 1: 

    num4 =90;
    num4--;

    console.log(num4--);



// Logical Operators;
    //OR -> ||
    //AND -> &&

    //OR Rules:
    console.log(true || ture); //-> ture
    console.log(true || fales || false || false); //-> ture
    console.log(false || true); //-> ture
    console.log(false || false); //-> false

    // NB: If one condision is true then the resul is true;

    // Exm:
    let userName = "kalimisultan";
    let password = "coder35";
    let age = 24;

    if (userName === "kalimi" || password === "coder32" || age === 24) {
        console.log("User can inter the bashboard!");
    } else{
        console.log("Incorrent Login?");
    }


    //AND Rules:
    console.log(true && true); //-> ture
    console.log(true && false); //-> false
    console.log(false && true); //-> false
    console.log(false && false); //-> false

    // NB: If one condision is false then the resul is false;

    if (userName == "kalimisultan" && password == "coder33" && age == 24) {
        console.log("Login successfuly!");
    } else{
        console.log("Incorrent username or pass or age?");
    }


    //one line statement: 
    if (age == 24) console.log("he is an adult");



//Ternary Operators:
    let isDarkmode = null;

    // if (isDarkmode == ture) {
    //     console.log("Dark mode is enabled");
    // } else {
    //     console.log("Dark mode is disabled");
    // }

    //Dynamic true or false { if(isDarkmode) -> true / if(!isDarkmode) z-> false }:

    // Falsey value JS:
    
    // Undefined
    // Null
    // 0
    // ""
    // NaN
    // false

    if (isDarkmode) {
        console.log("Dark mode is enabled");
    } else {
        console.log("Dark mode is disabled");
    }


    //(conditon) ? __true__ : __false__;

    isDarkmode == true
    ? console.log("Dark mode is On") 
    : console.log("Dark mode is Off!"); 