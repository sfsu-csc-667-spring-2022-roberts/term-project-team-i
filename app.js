
if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testsRouter = require('./routes/tests');
// var createGameRouter = require('./routes/createGame');
// var joinGameRouter = require('./routes/joinGame');
// var loginRouter = require('./routes/login');
// var signupRouter = require('./routes/signup');
// var landingRouter = require('./routes/landing');
// var gamePageRouter = require('./routes/game');
const { sign } = require("crypto");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//static file serving
app.get('/landing', function(req, res) {
  res.sendFile(path.join(__dirname, './views', 'landing.html'));
});

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, './views', 'login.html'));
});

app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, './views', 'signup.html'));
});

app.get('/joinGame', function(req, res) {
  res.sendFile(path.join(__dirname, './views', 'joinGame.html'));
});

app.get('/createGame', function(req, res) {
  res.sendFile(path.join(__dirname, './views', 'createGame.html'));
});

app.get('/game', function(req, res) {
  res.sendFile(path.join(__dirname, './views', 'game.html'));
});



// router system for serving requests
//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tests', testsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
