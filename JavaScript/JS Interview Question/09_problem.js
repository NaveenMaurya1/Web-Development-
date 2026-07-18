// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that
//  simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


// here we need to create manual async because of setTimeout → no need async.
// Function uses await or returns normal values → use async.

function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order Placed !!")
        }, Math.random() * 10000);
    })
}

async function main() {
    console.log("Placing your order...");
    const confirmation = await placeOrder();
    console.log(confirmation);

}

main()