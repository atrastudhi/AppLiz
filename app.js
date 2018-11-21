const express = require('express')
const app = express()
const UserRouter = require('./routes/user')
const ItemRouter = require('./routes/item')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/home', (req, res) => {
    res.send('welcome')
})

app.use('/user', UserRouter)

app.get('/*', (req, res) => {
    res.redirect('/home')
})

app.listen(port, () => console.log('Running...'))

