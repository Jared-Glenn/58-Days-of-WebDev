

let height = prompt("Please enter your height in meters.");
let weight = prompt("And your weight in kilograms, please?");


let bmi = Math.round((weight)/(height**2));
alert(`Your BMI is ${bmi}.`)



// let yearsSoFar = prompt("How many years old are you?");

// let years = 90 - yearsSoFar;

// let days = years * 365;
// let weeks = years * 52;
// let months = years * 12;

// alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");




// let dogAge = Number(prompt("What is your dog's age in years?"))

// if (dogAge < 1) {
//     let humanAge = "less than 15"
// }
// else if (dogAge == 1) {
//     let humanAge = 15
// }
// else {
//     let humanAge = ((dogAge - 2) * 4) + 21
// }

// let humanAge = ((dogAge - 2) * 4) + 21

// alert(`Your dog is ${humanAge} years old in human years!`)



// function cornerMove() {
//     while (frontIsClear()) {
//        move();
//     } 
//     turnLeft();
//     while (frontIsClear()) {
//        move();
//     } 
//  }





//  function main() {
//     putBeeper();
//     travelRow();
//     while (again()) {
//         nextRow();
//         travelRow();
//     }
//  }

// function travelRow() {
//     while (frontIsClear()) {
//         if (beepersPresent()) {
//             move();
//         }
//         else {
//             move();
//             putBeeper();
//         }
//     }
// }

// function again() {
//     if (facingEast()) {
//         if (leftIsClear()) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     else {
//         if (rightIsClear()) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }

// function nextRow() {
//     let isBeeper = beepersPresent();
//     if (facingEast()) {
//         turnLeft();
//         move();
//         turnLeft;
//         if (!isBeeper) {
//             putBeeper();
//         }
//     }
//     else {
//         turnRight();
//         move();
//         turnRight();
//         if (!isBeeper) {
//             putBeeper();
//         }
//     }
// }




//  function kittyCorner() {
//     turnLeft();
//     move();
//     turnRight();
//     move();
//     putBeeper();
//  }

