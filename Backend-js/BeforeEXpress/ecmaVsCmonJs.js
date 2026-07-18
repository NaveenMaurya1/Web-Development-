// Common JavaScript

// Import math module
const math = require("./mathCmn");

// Import user module
const user = require("./userCmn");

console.log("Addition:", math.add(20, 10));
console.log("Subtraction:", math.subtract(20, 10));
console.log("Multiplication:", math.multiply(20, 10));
console.log("Division:", math.divide(20, 10));

console.log(user.name);
console.log(user.age);
console.log(user.greet());






import { add, subtract, multiply, divide } from "./math.js";

import { name, age, greet } from "./user.js";

console.log(add(10, 20));
console.log(subtract(30, 20));
console.log(multiply(10, 5));
console.log(divide(100, 10));

console.log(name);
console.log(age);
console.log(greet());


// (function(exports, require, module, __filename, __dirname){
    
//     Module code actually lives here

// });

console.log(age,__dirname,__filename)