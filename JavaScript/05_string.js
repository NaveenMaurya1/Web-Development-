// Strings are immutable.....

let a = "Harry ji"
console.log(a.length)
console.log(a)

console.log(a[0])
console.log(a[1])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6]) //space also consider as part of string and can be access by the it's number.
console.log(a[7])
console.log(a[8]) //not throw an error just say Undefined.

let real_name = "Anurag"
let friend = "Sontu"
console.log("His name is "+ real_name+" and his freinds name is "+friend)
console.log(`His name is ${real_name} and his freinds name is ${friend}`) // here we have to use backtick

let b="Shivam"
console.log(a.toUpperCase())
console.log(a.toLowerCase())

// String slicing
console.log(b.slice(2,4)) //prints from 2 to 4 but 4 is excluded
console.log(b.slice(2)) // prints from 2 to end.

// strings replacing (case sensitive)
console.log(b.replace("Sh","bh"))
console.log(b.concat(a,"Aishwarya")) // we can use "+" operator for concatnation
