

        //Js conditions:

        //Dark Mode Consept
        let isDarkMode = false;

        if (isDarkMode == true) {
            console.log("Dark Mode is enabled");
        } else {
            console.log("Light Mode is enabled");
        }

        //Password consept

        let password = "js";

        if (password == "python") {
            console.log("Login Succesfull!");
        } else {
            console.log("Password is incorrect")
        }

        // == & ===

        let number = "10";

        if ("10" === 10) {
            console.log("correct number!");
        } else {
            console.log("incorrect number!");
        }

        //NB: === is more preferable.


        //Age Task:

        // age >= 40 => old 
        // age >= 26 => adult 
        // age >= 20 => semi adult
        // age < 20 => child

        let age = 15;

        if (age >= 40) {
            console.log("he is an old guy");
        } else if (age >= 26) {
            console.log("he is an adult guy");
        } else if (age >= 20) {
            console.log("he is a semi adult guy");
        } else {
            console.log("child");
        }

        //Temp task:

        // temp >= 40 => extreme hot 
        // temp >= 30 => hot 
        // temp <  30 => normal 
        // tem  <= 22 => cold 

        let temp =22;

        if (temp >= 40) {
            console.log("Extreme hot");
        } else if (temp >= 30) {
            console.log("Hot");
        } else if (temp <= 22) {
            console.log("Cold");
        } else {
            console.log("Normal");
        }


        // Result Caltulation Task:

        // Course -> Math, English, Science
        // Find out the average marks of 3courses
        // Find the actual grade
        // 90 -> A+
        // 80 -> A
        // 60 -> B+
        // 50 -> C 
        // 40 -> D 
        // Below 40 is Fail!

        Math = 85;
        English = 95;
        Science = 90;

        let averageMark = ((Math + English + Science) / 3) ;

        console.log("Total-Marks:", averageMark);

        if (averageMark >= 90) {
            console.log("Average Mark:", "A+;");
        } else if (averageMark >= 80) {
            console.log("averageMark:", "A;");
        } else if (averageMark >= 60) {
            console.log("averageMark:", "B+;");
        } else if (averageMark >= 50) {
            console.log("averageMark:", "C;");
        } else if (averageMark >= 40) {
            console.log("averageMark:", "D;");
        } else {
            console.log("averageMark:", "Fail;");
        }


        // simple calcutor: 

        firstNumber = 100;
        secNumber = 50;

        let addition = firstNumber + secNumber;

        console.log(addition);
