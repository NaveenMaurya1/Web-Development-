import mongoose from "mongoose";

// const { Schema } = mongoose;

const Todo_Schema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

export const Todo = mongoose.model('Todo', Todo_Schema) ;