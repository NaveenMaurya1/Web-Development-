// ocument.body.querySelector('.box').innerHTML

// document.body.querySelector('.container').innerHTML

// document.body.querySelector('.container').outerHTML

// document.body.querySelector('.container').textContent
       
// document.body.querySelector('.box').textContent

// document.body.querySelector('.box').innerText

// document.body.querySelector('.container').innerHTML = "Hello Harry ji"

// document.body.querySelector('.box').hasAttribute
// document.body.querySelector('.box').getAttribute
// document.body.querySelector('.box').setAttribute("style","display: inline")
// doucument.querySelector(".box").attributes
// document.body.querySelector('.box').removeAtrribute("style")

// document.designMode = "on" // after running it we can edit on that page anything

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b> by Harry Bhaiya </b>"
div.setAttribute("class","created");
document.querySelector(".container").append(div)

// document.querySelector(".container").prepend(div)
// document.querySelector(".container").before(div)

/*
   there are more function.........
   append(e) ---> append at the end of node
   prepend(e) ---> insert at the beggining of node
   before (e)---> insert before the node
   after(e) ---> insert after node
   replace with(e) ---> insert at the beggining of node

*/
 
let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<b>I am inserting at end.</b>");


document.querySelector(".container").classList
document.querySelector(".container").className
document.querySelector(".container").classList.add("Harry")
document.querySelector(".container").classList.remove("Harry")
document.querySelector(".container").classList.toggle("Harry")
