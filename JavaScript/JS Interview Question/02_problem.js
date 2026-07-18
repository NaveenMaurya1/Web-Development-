// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However,
//  there's a catch: if the array contains consecutive duplicate elements, only double one of them.

const { log } = require("node:console")


function doubleWithconsecutiveRule(arr){
    return arr.map((value,index) =>{
        //If current element is same as previous, skip doubling
        if (index > 0 && value === arr[index - 1]) {
            return value
        }
        // Otherwise, double it
        return value*2
    })
}

// array.map((element, index, array) => { // Basic Syntax
//   return newValue;
// });


let a1 = [2, 3, 3, 5, 6, 4, 2, 5, 7, 8]

let result = doubleWithconsecutiveRule(a1)

console.log(result);
