var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const mongoose = require('mongoose')
mongoose.connect(
    'mongodb+srv://Haibar:acerram4gb@cluster0.w2t4mut.mongodb.net/db_pcc?retryWrites=true&w=majority'
)
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var apiRouter = require('./routes/api')
// import admin router
const adminRouter = require('./routes/admin')
const { dirname } = require('path')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// session set up
app.use(methodOverride('_method'))
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 600000000 },
    })
)
// end session set up
// connect flash
app.use(flash())
// AOS
// end connect flash
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
    '/sb-admin-2',
    express.static(
        path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2')
    )
)

app.use('/', indexRouter)
app.use('/users', usersRouter)
// admin router
app.use('/admin', adminRouter)
app.use('/api/v1/member', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
