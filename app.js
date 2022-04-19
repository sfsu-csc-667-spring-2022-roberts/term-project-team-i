if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
}

var createError = require("http-errors");
var express = require("express");
var hbs = require("express-handlebars");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//TODO - uncomment the routers below as you are writing the routes
//      and testing them.

//var indexRouter = require('./routes/index');
var usersRouter = require("./routes/users");
var testsRouter = require("./routes/tests");
// var createGameRouter = require('./routes/createGame');
// var joinGameRouter = require('./routes/joinGame');
// var loginRouter = require('./routes/login');
// var signupRouter = require('./routes/signup');
// var landingRouter = require('./routes/landing');
// var gamePageRouter = require('./routes/game');
const { sign } = require("crypto");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
    "hbs",
    hbs.engine({
        layoutsDir: path.join(__dirname, "views/layouts"),
        partialsDir: path.join(__dirname, "views/partials"),
        extname: ".hbs",
        defaultLayout: "app",
        helpers: {
            emptyObject: (obj) => {
                return !(obj.constructor === Object && Object.keys(obj).length == 0);
            },
        },
    })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "public")));

//static file serving
app.get("/", function (req, res) {
    res.render("landing", { title: "Welcome to UNO!" });
});

app.get("/login", function (req, res) {
    res.render("login", { title: "Welcome Back!" });
});

app.get("/signup", function (req, res) {
    res.render("signup", { title: "Join Us!" });
});

app.get("/lobby", function (req, res) {
    res.render("lobby", { title: "Join or Create a game!" });
});

app.get("/game", function (req, res) {
    res.render("game", { title: "Have Fun!" });
});

// router system for serving requests
//app.use('/', indexRouter);
app.use("/users", usersRouter);
app.use("/tests", testsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
