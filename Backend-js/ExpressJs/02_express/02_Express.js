const express = require('express');
const app = express()
const port = 3000

app.use(express.static("public"))

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


// app.get('/', (req, res) => {               
//   console.log("hello get request")
//   res.send('Hello World! Get')
// })
// app.post('/', (req, res) => {
//   console.log("hello Post request ")
//   res.send('Hello World! Post ')
// })
// app.put('/', (req, res) => {
//   console.log("hello PUT request ")
//   res.send('Hello World! PUT ')
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})