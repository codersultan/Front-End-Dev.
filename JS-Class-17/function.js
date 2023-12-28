






// Rules of JS functions:
    // function name
    // perameters
    // carly basis
    // 

function addition (value1, value2) {
    // let value1 = 20;
    // let value2 = 30;
    console.log("sum", value1 + value2);
}

addition(20, 30);
addition(39, 38);


// Otp with js function:

function otpNumber() {
    let otpNumber = Math.floor(Math.random() * 9000 + 1000);
    console.log(otpNumber);
}

otpNumber();