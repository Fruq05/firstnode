// //importing express and storing it inside the variable of express
// const express = require ('express')

// //initialise the express function and store in a variable of app
// const app = express()

// //create a variable called port and store your port 
// const port = 7000

// app.get('/', (req, res) => {
//     res.status(200)
//     res.send('welcome to homepage')
// })

// app.get('/about', (req, res) => {
//     res.status(200)
//     res.send('welcome to about page')
// })

// app.get('/services', (req, res) => {
//     res.status(200)
//     res.send('welcome to services page')
// })

// app.get('/testimonial', (req, res) => {
//     res.status(200)
//     res.send('welcome to testimonial page')
// })

// //server listening for request at port
// app.listen(port, () => console.log(`server started successfully at http://localhost:${port}`))






const express = require('express')

const app = express()

const port = 8080

app.get('/', (req, res) => {
    res.status(200)
    res.send('welcome to home page')
})

app.get('/about', (req, res) => {
    res.status(200)
    res.send('welcome to about page')
})

app.get('/services', (req, res) => {
    res.status(200)
    res.send('welcome to services page')
})

app.listen(port, () => console.log(`server started successfully at hhtp://localhost:${port}`))