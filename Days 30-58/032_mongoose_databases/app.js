const mongodb = require("mongodb")
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1/fruitsDB');
    console.log("Connected");

    const personSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            min: 0,
            max: 150
        }
    })
    
    const Person = mongoose.model("Person", personSchema);

    // const person = new Person({
    //     name: 'John',
    //     age: 37
    // })

    // await person.save();
    // console.log("Person Saved!");

    Person.updateOne({name:"John"}, {favoriteFruit: "banana"}, function (err) {
        if (err) {
           console.log(err);
       } else {
           console.log("Record Updated Successfully");
       }   
   });





    // Person.find(function(err, persons) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         mongoose.connection.close(() => {
    //             process.exit(0)
    //         })

    //         persons.forEach(function(person){
    //             console.log(person.name);
    //         })
    //     }
    // });

    // await Person.deleteOne({name: "John"});
};
