let Button = document.getElementById("btn")

//Mouse Events
Button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b> Yaay Enjoyed your clicked </b> ..... but thanked god that you clicked........😘😘😘😘"
})
Button.addEventListener("contextmenu", () => {
    alert("Don't hack us by right Click Please")
})

document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode)
})