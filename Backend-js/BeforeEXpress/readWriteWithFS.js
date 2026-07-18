// import fs from "fs";     // ECMA Script


const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {  // Asynchronus
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});



const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf8"); // Synchronus

console.log(data);



const fs = require("fs");

fs.writeFile("data.txt", "Hello World", (err) => { // OverWrite file
    if (err) throw err;
    console.log("File Created");
});



const fs = require("fs");

fs.writeFileSync("data.txt", "Hello Node.js");

console.log("File Written");




const fs = require("fs");

fs.appendFile("data.txt", "\nWelcome", (err) => {
    if (err) throw err;
    console.log("Data Added");
});



const fs = require("fs");

fs.appendFileSync("data.txt", "\nNode.js");

console.log("Data Appended");