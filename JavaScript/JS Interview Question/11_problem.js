// The Array Filterer: You are building a search feature for your e - commerce site.Write a function named filterProducts that takes an array
//  of product objects and a filter criterion.The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
    return products.filter(product => {
        // Check if all keys in criterion match the product
        return Object.keys(criterion).every(key =>{
            return product[key] === criterion[key]
        })
    });
}

//filter() loops over each item in the array, For each product, it runs the callback
//Object.keys(criterion): This extracts all keys from the filter condition.
//.every() checks if ALL conditions are true
// product[key] === criterion[key] : This is the core logic.

const products = [
  { name: "Laptop", category: "Electronics", price: 50000 },
  { name: "Shirt", category: "Clothing", price: 1500 },
  { name: "Phone", category: "Electronics", price: 20000 }
];

const result = filterProducts(products,{name:"Shirt"})

console.log(result);
