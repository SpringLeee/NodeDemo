var express = require('express')
var app = express();
var crypto = require('crypto');

var bodyParser = require('body-parser');

var DB = require("./SqlHelper.js")

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.static("Content"))

app.get("/", function (req, res) {
    console.log("")
    res.sendfile(__dirname + "/Content/index.html");
});

app.get("/Login", function (req, res) {
    console.log(req.cookies)
    res.sendFile(__dirname+"/Content/login.html");
})


app.get("/Register", function (req, res) {
    console.log(req.cookies)
    res.sendFile(__dirname + "/Content/register.html");
})

app.post("/LoginAjax", urlencodedParser, function (req, res) {
   
    var user = req.body.user;
    var pwd = crypto.createHash('md5').update(req.body.pwd).digest('hex');

    DB.Query("SELECT count(*) as c from users where nickname= ? and `password`= ?", [user, pwd], function (err, result, fields) {

        

        if (result[0].c > 0) {

            res.cookie("user", user, { maxAge:1000 });

            res.send("登陆成功");
        }
        else {

            res.send("用户名密码错误");
        }



    });
   
});

var server = app.listen(6677);
console.log("NodeJs Success！")





