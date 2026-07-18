// Whenever you declare a function with the async keyword, JavaScript automatically wraps whatever you return in a Promise.



// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

// console.log("Loading modules");
// console.log("Do something else");
// console.log("Load Data");

// let data = getData()

// console.log(data)
// console.log("Process data")

// data.then ((v)=>{  // this helps to prevent running the code before without fulfilling the promise.
//     console.log(data)
//     console.log("Process data");   
// })


// we have alternative for this known as async and await .

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })
}
// async function getData() {
//          return 455;    // both gonna work same.
//        // return Promise.resolve(455)
// }

async function getData2() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json;
    console.log(data);
    return 433;
} 

async function main() {

    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load Data");

    let data = await getData()
    let data2 = await getData2()

    console.log(data)
    console.log(data2)
    console.log("Process data")

}

main();