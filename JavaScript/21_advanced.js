async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// let a = await sleep() // you can't use this like this...
// let b = await sleep()

// that's why we use this Known as "IIFE : "Immedieatly Invoke Funtion"..
(async function main() {
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);
})()

//destructuring...
// {
let [x, y, ...rest] = [1, 5, 8, 45, 76] // x = 1, y = 5 , ...rest = 8,45,76 (we have to use "...")
console.log(x, y);

let obj = {
    a: 1,
    b: 2,
    c: "raju"
}
 let {a,b} = obj 
 console.log(a,b);
 
// }

// Spread Syntax

function sum(a,b,c){
    return a+b+c
}

let arr =[2,13,22,12]
console.log(sum(...arr)); // Both gonna print same value...
console.log(sum(arr[0],arr[1],arr[3]));

// Hoisting.. - 

function name(){
    console.log(a1)
    console.log("Hello ji World ji");

    var v1 = 5;     
}