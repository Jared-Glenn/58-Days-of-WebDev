let text = prompt("What have you written so far?");

let len = text.length;

let remaining = 140 - len

if (remaining >= 0) {
    alert(`The length of your tweet is ${len} characters so far. You have ${remaining} characters remaining.`);
}
else {
    let sliced = text.slice(0,140)
    alert(`Your Tweet went over 140 characters and has been cut short.
    Your new Tweet is: ${sliced}`)
}


// let text = prompt("What is your name?");

// let len = text.length;
// let firstLetter = text.slice(0,1);

// let restOfName = text.slice(1,len)

// alert("Hello, " + firstLetter.toUpperCase() + restOfName.toLowerCase() + "!")