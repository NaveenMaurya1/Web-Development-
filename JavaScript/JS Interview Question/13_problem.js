// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart.
//  Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(products){
  return products.reduce ((total,product) =>{
      return total + product.price * product.quantity
   }, 0);   
}

const cart = [
  { name: "Laptop", price: 54000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 }
];

const total = calculateTotal(cart);

console.log(total); 