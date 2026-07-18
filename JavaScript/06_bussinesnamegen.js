// bussines Name Generator byt the combining list of adjectives.

// const { log } = require("node:console");
// after using above line we print the statement with log("") only , no need for console.log("") 

/*
Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another word:
Bros
Limited 
Hub

*/


let adj = "Crazy,Amazing,Fire";
let shop_name = "Engine,Foods,Garments";
let anot_word = "Bros,Limited,Hub";

// Split the strings into arrays
let adjWords = adj.split(",");
let shopWords = shop_name.split(",");
let anotWords = anot_word.split(",");

// Function to generate random business name
function generateName() {
    return adjWords[Math.floor(Math.random() * adjWords.length)] + " " +
           shopWords[Math.floor(Math.random() * shopWords.length)] + " " +
           anotWords[Math.floor(Math.random() * anotWords.length)];
}

let name1 = generateName();
let name2 = generateName();

console.log("Business Name:", name1);
console.log("Business Name:", name2);
