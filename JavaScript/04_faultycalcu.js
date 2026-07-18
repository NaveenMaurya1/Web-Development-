const readline = require("readline"); // for taking output in node,js terminal 

function faultycalculator(a, b, operator) {
    if (operator === '+') {
        return a - b;
    }
    else if (operator === '-') {
        return a / b;
    }
    else if (operator === '*') {
        return a - b;
    }
    else if (operator === '/') {
        return a ** b;
    }
    else {
        console.log("Something went wrong......!")
    }
}
function calculator(a, b, operator) {
    if (operator === '+') {
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
    else if (operator === '*') {
        return a * b;
    }
    else if (operator === '/') {
        return a / b;
    }
    else if (operator === '**') {
        return a ** b
    }
    else {
        console.log("Something went wrong here......!")
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {
        rl.question("Enter operator: ", (operator) => {

            a = Number(a);
            b = Number(b);
            if (Math.random() < 0.1) {
                console.log("Answer :", faultycalculator(a, b, operator))
            }
            else {
                console.log("Answer :", calculator(a, b, operator))
            }

            rl.close();
        });
    });
})