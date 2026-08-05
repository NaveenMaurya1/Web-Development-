import mongoose from "mongoose";

import {Todo} from "./models/Todo";

let a = await mongoose.connect("mongodb://localhost:27017/")

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});