let express = require('express')
let mongoose = require("mongoose"),
    app = express()
const expressSession = require('express-session')
const cookiePrser = require('cookie-parser')
const passport = require('passport')

// const decree = require('./models/decree');

const router = require("./routes/index")

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/blogs', {
    useNewUrlParser: true
})
app.use(express.json())
app.use(cookiePrser('myblog'))
app.use(expressSession({
    secret: 'myblog',
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 6000 }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', router)





app.listen(3000, () => {
    console.log("express started")
})