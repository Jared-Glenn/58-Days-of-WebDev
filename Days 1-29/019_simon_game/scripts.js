
const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern  = [];
let userClickedPattern = [];
let gameStarted = false;
let gameLevel = 0

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    return randomNumber
}

function randomChosenColor() {
    let newColor = buttonColors[nextSequence()];
    gamePattern.push(newColor);
    activateButton(newColor);
    gameLevel++;
    $("h1").text(`Level ${gameLevel}`);
    console.log("Game", gamePattern)
}

function activateButton(color) {
    let audioFile = `sounds/${color}.mp3`;
    let audio = new Audio(audioFile);
    audio.autoplay = true;
    audio.play();
    $("#"+color).addClass("pressed").delay(200).queue(function(next) {
        $(this).removeClass("pressed");
        next();
    });
}

function checkAnswer() {
    let isCorrect;
    if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1]) {
        console.log("Correct!")
    }
    else {
        console.log("Wrong!")
        return false;
    }
    if (userClickedPattern.length === gameLevel) {
        userClickedPattern = [];
        setTimeout(function() {
            randomChosenColor();
        }, 1000);
    }
    return true;
}

$(document).on("keydown", function(event) {
    if (gameStarted === false) {
        randomChosenColor();
        gameStarted = true;
    }
})

$("div.btn").on("click", function(event) {
    userClickedPattern.push(event.target.id)
    activateButton(event.target.id)
    console.log("Player", userClickedPattern)
    gameStarted = checkAnswer()
    if (gameStarted === false) {
        let audioFile = "sounds/wrong.mp3";
        let audio = new Audio(audioFile);
        audio.autoplay = true;
        audio.play();
        $("body").addClass("game-over").delay(200).queue(function(next) {
            $(this).removeClass("game-over");
            next();
        });
        $("h1").text("Game Over\nPress Any Key to Restart");
        gamePattern = [];
        userClickedPattern = [];
        gameLevel = 0;
    }
})