const express = require('express');
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)

app.get('/', (req, res) => {                 // this is known as chaining of requests
  console.log("hello get request")
  res.send('Hello World! Get')
}).post('/', (req, res) => {
  console.log("hello Post request ")
  res.send('Hello World! Post ')
}).put('/', (req, res) => {
  console.log("hello PUT request ")
  res.send('Hello World! PUT ')
})


app.get('/index', (req, res) => {               
  console.log("hello get request of index visit")
  res.sendFile('templates/index.html',{root: __dirname}) // here we can also give whole absolute path instead of tjis method
})

app.get('/api',(req,res) =>{
  console.log("getting json")
  res.json({a :1,b :2,c :3,name :["harry","jarry"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})