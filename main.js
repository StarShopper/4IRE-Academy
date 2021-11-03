// Setting currency and it's cost

let UAN = 26.23;
let RUB = 71.98;
let USD = 1;
let EUR = 0.86;
let PLN = 3.97;

//setting variable for repeating the loop

let repeat = true;

//setting some user's inputs and value

let usersFirstCurr;
let usersSecondCurr;
let userInput;
let currVal;
let currToVal;
let convertingResult;

// starting the programm

while (repeat = true) {

    //entering the first proper currency by user

    usersFirstCurr = prompt('Please enter the certain currency for converting:  UAN, RUB, USD, EUR, PLN', "").toUpperCase(usersFirstCurr);

    //checking wether they are in our prog.

    while (usersFirstCurr !== "UAN" && usersFirstCurr !== "RUB" && usersFirstCurr !== "USD" && usersFirstCurr !== "EUR" && usersFirstCurr !== "PLN") {

        // throwing error and repeat the action once again
        usersFirstCurr = prompt('Sorry, we have only: UAN, RUB, USD, EUR, PLN', "");
    }

    // giving the value to the first currency

    currVal = usersFirstCurr == 'UAN' ? 26.283 : usersFirstCurr == 'RUB' ? 71.98 : usersFirstCurr == 'USD' ? 1 : usersFirstCurr == 'EUR' ? 0.86 : 3.97;

    // Second user's input. Number which he want to convert

    userInput = +prompt("How much do you want to convert? ", "")

    // checking wether user enter positive num. If not - throwing error

    while (userInput <= 0 || isNaN(userInput)) {

        userInput = prompt('You should enter number bigger than 0, please, try again')
    }
    //Repeating the first fart if code. entering the second proper currency by user

    usersSecondCurr = prompt('Please enter the certain currency in which you want to convert: ', "UAN, RUB, USD, EUR, PLN").toUpperCase(usersSecondCurr);

    // checking currency

    while (usersSecondCurr !== "UAN" && usersSecondCurr !== "RUB" && usersSecondCurr !== "USD" && usersSecondCurr !== "EUR" && usersSecondCurr !== "PLN") {
        // throwing error and repeat the action once again
        usersSecondCurr = prompt('Sorry, we have only: UAN, RUB, USD, EUR, PLN', "");
    }

    // setting values in which the num will convert
    currToVal = usersSecondCurr == 'UAN' ? 26.283 : usersSecondCurr == 'RUB' ? 71.98 : usersSecondCurr == 'USD' ? 1 : usersSecondCurr == 'EUR' ? 0.86 : 3.97;

    // make the formula to get the proper convertion
    convertingResult = +((userInput / currVal) * currToVal).toFixed(2);

    // result of the converting
    alert(`Convertion result: ${userInput}  ${usersFirstCurr} = ${convertingResult}  ${usersSecondCurr}`);

    // asking if the user want to start the converting again
    repeat = confirm('Do you wat to convert smth else? ');
}