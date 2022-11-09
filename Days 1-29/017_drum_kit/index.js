let buttons = document.querySelectorAll("button");

buttons.forEach(addListener);

function soundPlayer(buttonInnerHTML) {
    switch (buttonInnerHTML) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "l":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

    }
}


function addListener(button) {
    button.addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        soundPlayer(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    let buttonInnerHTML = event.key;
    soundPlayer(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
})

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}



// function HouseKeeper(name, canDust, canVaccuum) {
//     this.name = name;
//     this.canDust = canDust;
//     this.canVaccuum = canVaccuum;
//     this.clean = function() {
//         alert("Cleaning in Progress!")
//     }
// }

// let Bitty = new HouseKeeper("Bitty", true, false)


// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }
//  function divide(num1, num2) {
//     return num1/num2;
//  }

//  function exponent(num1, num2) {
//     return num1**num2
//  }