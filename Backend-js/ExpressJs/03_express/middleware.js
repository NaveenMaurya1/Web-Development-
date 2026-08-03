const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./blog')

app.use(express.static("public"))  // middleware is thing which we manipulate the request 
app.use("/blog",blog)

const mylog = function(req,res,next){     // we dont send response here....but we acn do it 
    // console.log(req.header)
    req.hi = "hey buddy ,how are you ?"
    fs.appendFileSync("logs.txt",`\n${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by middle ware 1")
    next()
}
app.use(mylog)

const mylogger = function(req,res,next){
    req.hi = " hey buddy ,what are you doing ?"       // odering matters most in the middleware ...
    console.log("LOGGED! M1")
    next()
}
app.use(mylogger)


app.use(function(req,res,next){
    console.log("LOGGED! M2" )
    next()
})

app.get('/',(req,res) =>{
    res.send('Hello world')

})
app.get('/about',(req,res) =>{
    res.send('Hello About' +req.hi)

})
app.get('/contact',(req,res) =>{
    res.send('Hello Contact')

})

app.listen(port, () =>{
   console.log(`Exmaple app listening on port http://localhost:${port}`)
})