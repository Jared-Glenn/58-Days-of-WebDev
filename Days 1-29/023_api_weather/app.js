const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    const city = req.body.cityName;
const apiKey = "See security.txt"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
https.get(url, function(response) {
    console.log(response.statusCode)
    response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const icon = weatherData.weather[0].icon;
        const link = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        res.write(`<h1>The temperature in ${weatherData.name} is </h1>`);
        res.write(`<h2>${weatherData.main.temp} Degrees Celsius with ${weatherData.weather[0].description}.</h2>`);
        res.write(`<img src="${link}">`)
        res.send();
    })
})
})




app.listen(3000, function() {
    console.log("Server is running on port 3000.")
})