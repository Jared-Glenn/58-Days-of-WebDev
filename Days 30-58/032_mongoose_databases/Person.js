const mongodb = require("mongodb");
const mongoose = require("mongoose");
const { mainModule } = require("process");
const Person = require("./Person")

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model("Person", personSchema)