const express = require('express');
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   let siteName = "Adidas"
//   let searchText = "Search Now"
//   res.sendFile('templates/index.html',{root:__dirname})
// })

// app.get('/blog/:slug', (req, res) => {               
//   let blogTtile = "Adidas why and when ?"
//   let blogContent = "It's very good brand"
//   res.sendFile('templates/blogpost.html',{root:__dirname})
// })

  // here we gonna install EJS template framewrok using "nom i ejs" command..
 //  this will gonna add some more packages in your previous .json files.

app.set('view engine','ejs') // using ejs here , we are using all this to use content on our template ,like blogcontent in our template.

// we can also render object and array throuh ejs ..

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  res.render('index',{siteName: siteName, searchText: searchText})  // here we are putting siteNaame's value in place of siteName which is already present in our html file.same for every content.
})

app.get('/blog', (req, res) => {               
  let blogTitle = "Adidas why and when ?"
  let blogContent = "It's very good brand"
  res.render('blogpost',{blogTitle:blogTitle, blogContent:blogContent})  // here we are putting blogTitile's content in place of blogTitle which is already present in our html file.same for every content.
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})