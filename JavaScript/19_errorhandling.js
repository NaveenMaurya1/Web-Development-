let a = parseInt(prompt("Enter a first number")) // parseInt is used for convert string into integer. because prompt input strings
let b = parseInt(prompt("Enter a second number"))
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry,this is not allowed")
}
let sum = a+b

try {
    console.log("The sum is ",sum*x) 
} catch (error) {
    console.log("Something went wrong !!");
    
}
finally{ // Always runs....
    console.log("Files are being closed and db is being closed");
    
}