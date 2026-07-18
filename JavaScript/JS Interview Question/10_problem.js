// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously.
//  Write an async function named brewCoffee that takes the type of coffee and returns a promise.The promise should resolve
// with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(type) {
    return new Promise((resolve,reject) =>{
         setTimeout(() => {
            resolve(`Your ${type} coffee☕🍵 is ready !!`)
        }, Math.random() * 10000);
    })
}
async function main(){
    const ans = await brewCoffee("Latte")
    console.log(ans);
    
}

main()
