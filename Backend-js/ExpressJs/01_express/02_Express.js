const express = require('express');
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log("hello get request")
  res.send('Hello World! get')
})

app.post('/', (req, res) => {
  console.log("hello Post request ")
  res.send('Hello World! post ')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})