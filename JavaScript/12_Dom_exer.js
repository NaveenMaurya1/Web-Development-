console.log("Hello ji World ji");

function getRandomColor(){ // Random color generator
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);

    return `rgb(${r},${g},${b})`;
}

document.body.firstElementChild.children[0].style.backgroundColor = getRandomColor();
document.body.firstElementChild.children[0].nextElementSibling.style.backgroundColor = getRandomColor();
document.body.firstElementChild.children[3].previousElementSibling.style.backgroundColor = getRandomColor();
document.body.firstElementChild.children[4].previousElementSibling.style.backgroundColor = getRandomColor();
document.body.firstElementChild.children[4].style.backgroundColor = getRandomColor();