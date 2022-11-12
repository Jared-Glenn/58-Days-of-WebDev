// const fs = require("fs");
const superheroes = require('superheroes');
const supervillains = require('supervillains');

// fs.copyFileSync("file1.txt", "file2.txt");

let hero1 = superheroes.random();
let villain1 = supervillains.random();
console.log(hero1);
console.log(villain1)
