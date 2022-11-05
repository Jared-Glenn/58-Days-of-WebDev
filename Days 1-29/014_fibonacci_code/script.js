

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    let len;
    let num1;
    let num2;
    let newNum;
    let arr = [];

    if (n === 0) {
        return arr;
    }
    else if (n === 1) {
        return [0];
    }
    else if (n === 2) {
        return [0,1];
    }
    else {
        arr = [0,1]
        for (let i = (n-2); i > 0; i--) {
            len = arr.length;
            num1 = arr[len - 1];
            num2 = arr[len - 2];
            newNum = num1 + num2
            arr.push(newNum)
        }
        return arr;
    }
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }

let n = prompt("How many numbers do you want in the sequence?")
let myArray = fibonacciGenerator(n);
alert(`Here is your array! ${myArray}`)
    

// function bottlesOfBeer() {
//     let count = 99

//     while (count > 0) {
//         if (count === 1) {
//             console.log("1 Bottle of Beer on the wall.")
//             console.log("1 Bottle of Beer.")
//             console.log("Take one down, pass it around.")
//             count -= 1
//             console.log("No Bottles of Beer on the wall.")
//         }
//         else if (count === 2) {
//             console.log("2 Bottles of Beer on the wall.")
//             console.log("2 Bottles of Beer.")
//             console.log("Take one down, pass it around.")
//             count -= 1
//             console.log("1 Bottle of Beer on the wall.")
//         }
//         else {
//             console.log(`${count} Bottles of Beer on the wall.`)
//             console.log(`${count} Bottles of Beer.`)
//             console.log(`Take one down, pass it around.`)
//             count -= 1
//             console.log(`${count} Bottles of Beer on the wall.`)
//         }
//     }
// }



// function whosPaying(names) {
//     let len = names.length

//     let randomNumber = Math.floor(Math.random() * len)

//     console.log(len, randomNumber)

//     let chosen = names[randomNumber]
//     return `${chosen} is going to buy lunch today!`

//     }




// let output = [];
// let counter = 1;

// function fizzBuzz() {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//         output.push("FizzBuzz");
//     }
//     else if (counter % 3 === 0) {
//         output.push("Fizz");
//     }
//     else if (counter % 5 === 0) {
//         output.push("Buzz");
//     }
//     else {
//         output.push(counter);
//     }
//     counter++;
//     console.log(output);
// }

// output.push(1, 100)
// console.log(push)





// function isLeap(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return "Leap year."
//             }
//             else {
//                 return "Not leap year."
//             }
//         }
//         else {
//             return "Leap year."
//         }
//     }
//     else {
//         return "Not leap year."
//     }
    
//     }





// function bmiCalculator (weight, height) {
//     let bmi = Math.round(weight/(height*height))
//     let interpretation;
    
//     if (bmi > 24.9) {
//         interpretation = `Your BMI is ${bmi}, so your are overweight.`
//     }
//     else if (bmi >= 18.5) {
//         interpretation = `Your BMI is ${bmi}, so you have a normal weight.`
//     }
//     else {
//         interpretation = `Your BMI is ${bmi}, so you are underweight.`
//     }
    
    
    
//     return interpretation;
// }



// let name1 = prompt("What is your name?")
// let name2 = prompt("What is the other person's name?")

// let randomNumber = (Math.floor(Math.random() * 100)) + 1

// alert(randomNumber)