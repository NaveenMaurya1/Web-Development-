//Array is mutable .so we can change it later.

let arr = [1, 2, 4.5, "harry"]

console.log(arr);
console.log(arr.length)
console.log(arr[3])

arr[2] = 90;
console.log(arr); // mutable.

console.log(arr.toString()) //it converts array as a string.

console.log(arr.join(" and ")) // separate by and

console.log(arr.pop()) // pop last element of array

arr.push("Anurag")

console.log(arr) // push at last place of an array

console.log(arr.shift()) // pop first element of array

arr.unshift("Rose") // push at first place of an array

delete arr[4] // deleted the element but acquired the memmory.

let a1 = [1, 2, 3, 4]
let a2 = [5, 6, 7, 8]
let a3 = [9, 10, 11, 12]

console.log(a1.concat(a2, a3)) //concat the array here is this happening in a1

let j = [7, 10, 2, 8]

j.sort() //it sort the array

a3.splice(2, 3)

const num = [1, 2, 3, 4]
console.log(num.slice(2));

j.reverse() // reverse the source array


// looping in array

a1.forEach((value, index, arr) => {
    console.log(value, index, arr)
})

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) {
        const element = obj[key];
        console.log(key, element)

    }
}

for (const element of obj) {
    console.log(element)
}

// maps in array

// array.map((element, index, array) => { // Basic Syntax
//   return newValue;
// });

let arr = [1, 13, 5, 7, 11]

let newArr = arr.map((e,index,array)=>{
    return e**2
})

console.log(newArr)

// filters in array

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
     return false
}
console.log(newArr.filter(greaterThanSeven))

// Reduce Method
let arr2 = [1,2,3,4,5,6]

const red =(a,b)=>{
    return a+b
}

console.log(arr2.reduce(red))



const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10

// array.reduce((accumulator, currentValue) => {
//   // logic
//   return accumulator;
// }, initialValue);

// accumulator (acc) → stores the result as it builds up
// currentValue (curr) → current item in the array
// initialValue → starting value of accumulator