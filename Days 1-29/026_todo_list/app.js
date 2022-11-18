const express = require("express");
const bodyParser = require("body-parser");
let ejs = require('ejs');

const app = express();

let items = [];

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static(__dirname));
app.set('view engine', 'ejs')


app.get('/', function (req, res) {

    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    let day = today.toLocaleDateString("en-US", options);

    
    res.render("list", { kindOfDay: day, items: items});
    
    
});

app.post('/', function(req, res) {
    newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");
})





app.listen(process.env.PORT || 3000, function () {
    console.log("Server opened on port 3000.")
})





// switch (currentDay) {
//     case 0:
//         day = "Sunday";
//         break
//     case 1:
//         day = "Monday";
//         break
//     case 2:
//         day = "Tuesday";
//         break
//     case 3:
//         day = "Wednesday";
//         break
//     case 4:
//         day = "Thursday";
//         break
//     case 5:
//         day = "Friday";
//         break
//     case 6:
//         day = "Saturday";
//         break
//     default:
//         console.log("Error: Current day is equal to " + currentDay);
//         break
// }

// if (currentDay === 0) {
//     day = "Sunday";
// }
// else if ((currentDay === 1)){
//     day = "Monday";
// }
// else if ((currentDay === 2)){
//     day = "Tuesday";
// }
// else if ((currentDay === 3)){
//     day = "Wednesday";
// }
// else if ((currentDay === 4)){
//     day = "Thursday";
// }
// else if ((currentDay === 5)){
//     day = "Friday";
// }
// else if ((currentDay === 6)){
//     day = "Saturday";
// }