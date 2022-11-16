const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

mailchimp.setConfig({
    apiKey: "d26681fa7e1f648dab90cb1820bf3b11-us14",
    server: "us14"
});

app.post('/', function(req, res) {
    const fname = req.body.fName;
    const lname = req.body.lName;
    const email = req.body.email;
    const listId = "d89a00edde"
    
    async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fname,
                LNAME: lname,
            }
        });
        res.sendFile(__dirname + "/success.html")
        console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`)
    }

    run().catch(e => res.sendFile(__dirname + "/failure.html"));

});

app.post('/failure', function(req, res) {
    console.log("Working!")
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server opened on port 3000.")
})

// API KEY
// d26681fa7e1f648dab90cb1820bf3b11-us14
// AUDIENCE ID
// d89a00edde

// 
// });
