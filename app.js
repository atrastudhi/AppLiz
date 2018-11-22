const express = require('express')
const session = require('express-session')
const app = express()
const UserRouter = require('./routes/user')
const ItemRouter = require('./routes/item')
const helper = require('./helper/helper')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: 'kuda lumping'
}))

app.get('/home', helper.loginCheck, (req, res) => {
    res.render('pages/home', {status: false})
})

app.use('/item',ItemRouter)

app.use('/user', UserRouter)

app.get('/*', (req, res) => {
    res.redirect('/home')
})

app.listen(port, () => console.log('Running...'))
