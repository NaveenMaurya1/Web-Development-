// The Sum Selector: You are working on a function that should sum all numbers in
// an array until it encounters a negative number. Write a function that performs this summation.

function sumSelector(array){
    result = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            result += array[i];            
        } 
    }
    return result
}

arr =[-10,3,,5,6,-3,0]
sum = sumSelector(arr)

console.log(sum);
