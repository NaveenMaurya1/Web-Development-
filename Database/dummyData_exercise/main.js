const express = require('express');
const app = express()
const port = 3000

const mongoose = require('mongoose');
const Employee = require('./models/Employee');

(async () => {
  await mongoose.connect('mongodb://localhost:27017/company');
  console.log('MongoDB connected');
})();

app.set('view engine','ejs')

const getRandom = (arr) =>{
    let random = Math.floor(Math.random() *( arr.length -1)) ;
    return arr[random];
}

app.get('/', (req, res) => {
  res.render('index',{foo:'FOO'})
})
app.get('/Genrate', async (req, res) => {
// Genrate random Data 
   let randomName = ["Rohan","Sohan","Shyam","Deepak","Harry"];
   let randomSalary = [10000,20000,30000,40000,50000];
   let randomLang = ["Python","C++","C#","Java","JS"];
   let randomCity = ["New york","Quabec","California","Banglore","Seattle"];
   let randomManager = ["true","false"];

   for (let i = 0; i < 10; i++) {
   let e = await Employee.create({
      name: getRandom(randomName), 
      salary: getRandom(randomSalary), 
      language: getRandom(randomLang), 
      city: getRandom(randomCity), 
      isManager: getRandom(randomManager)
   })
    console.log(e)
   }

  res.render('index',{foo:'FOO'})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})