const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('post request_1!');
});

app.post('/r', (req, res) => {
  console.log(req.body);
  res.send('post request_2!');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});