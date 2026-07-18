console.log("Harry");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green" ; // chose the first box

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green";    
})

document.getElementsByTagName("div") // gives all div including parent div too.