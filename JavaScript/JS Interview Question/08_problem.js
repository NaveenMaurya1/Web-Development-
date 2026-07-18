// Async Array Mapping: Write an asynchronous function thattakes an array of numbers and returns a
//  new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function arrayMultiply(array) {
    return array.map((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num * 2)
            }, 500)
        })
    })
}

async function main() {
    let a = [1, 23, 3, 4, 5]

    let promises = arrayMultiply(a)
    let result = await Promise.all(promises)

    // let result = await arrayMultiply(a)   // it returns : [Promise, Promise, Promise, Promise, Promise]

    console.log(result) // [ 2, 46, 6, 8, 10 ]
    console.log(promises) // [Promise { 2 },Promise { 46 },Promise { 6 },Promise { 8 },Promise { 10 }]

}

main()




