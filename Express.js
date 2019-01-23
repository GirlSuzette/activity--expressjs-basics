const express = require('express')
const app = express()
const chalk = require('chalk')
const morgan = require('morgan')
const port = 3000


// app.use(morgan('combined'))


// app.get('/', (req, res, next) => {
//     res.send(new Date().toDateString())
//     next()
// })

// app.get('/about', (req, res, next) => {
//     res.send(new Date().toDateString())
//     next()
// })

// app.get('/api', (req, res, next) => {
//     res.send(new Date().toDateString())
//     next()
// })


app.use(function (req, res, next) {
    console.log(chalk.green('Request URL:', req.originalUrl))
    next()
}, function (req, res, next) {
    console.log(chalk.yellow('Request Type:', req.method))
    next()
}, function (req, res, next) {
    console.log(chalk.red('Request Data:', new Date().toDateString()))
    next()
})

app.listen(port, () => {
    console.log(chalk.blue(`runninf on the port 3000`))
})