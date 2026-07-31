const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))   // app.use middlware ko use karne me kaam aata hai and express.static ek bulit in middleware hai jo public folder ko public banane me kaam aata hai 

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me if you want to do that !')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)    // for clickable link
})