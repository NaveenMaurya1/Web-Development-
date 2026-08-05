import mongoose from "mongoose";

import { Todo } from "./models/Todo.js";

await mongoose.connect("mongodb://127.0.0.1:27017/TodoDB");

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {

  const todo = new Todo({ title: "Getting Started with Node.js",
  author: "Praveen Maurya",
  body: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to build fast and scalable server-side applications using JavaScript.",
  comments: [
    {
      body: "Great article! Very easy to understand.",
      date: new Date("2026-08-05")
    },
    {
      body: "Can you make one on Express.js?",
      date: new Date("2026-08-06")
    }
  ],
  date: new Date(),
  hidden: false,
  meta: {
    votes: 156,
    favs: 87
  }})
  todo.save()

  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});