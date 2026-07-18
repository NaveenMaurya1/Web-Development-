// factorial using for loop

function fact(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result *= i
    }
    return result;
}

// factorial using reduce method
function factorial(a) {
    let arr = Array.from({ length: a }, (_, i) => i + 1); // it creates an array like [1,2,3,4,5]
    return arr.reduce((a, b) => a * b); //it multiplies all items of array
}

console.log(fact(4))
console.log(factorial(5));
