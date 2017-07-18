var express = require('express')
var app = express();

var bodyParser = require('body-parser');

var DB = require("./SqlHelper.js")

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.static("Content"))

app.get("/", function (req, res) {
    res.send("Home");
});

app.get("/Login", function (req, res) {

    res.sendFile(__dirname+"/Content/login.html");
})

app.get("/Register", function (req, res) {

    res.sendFile(__dirname + "/Content/register.html");
})

app.post("/LoginAjax", urlencodedParser, function (req, res) {

    var user = req.body.user;
    var pwd = req.body.pwd;

    DB.Query("SELECT count(*) from users", function (err, result, fields) {

        console.log(JSON.stringify(results));

    });
   
});

var server = app.listen(6677);




