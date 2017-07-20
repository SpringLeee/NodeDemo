var express = require('express')
var app = express();
var crypto = require('crypto');

var DB = require("./SqlHelper.js")
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false })
var cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.static("Content"))

var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.set("view engine", "html"); 

app.get("/", function (req, res) {

    if (req.cookies.user === undefined) {
        res.redirect("/Login");
    }

    res.render(__dirname + "/Content/home.html", { data: 123 })
});

app.get("/Login", function (req, res) {
    
    res.sendFile(__dirname + "/Content/login.html");

})


app.get("/Register", function (req, res) {

   
    res.sendFile(__dirname + "/Content/register.html");
})

app.get("/Add", function (req, res) {
    res.sendFile(__dirname+"/Content/add.html")
})

app.get("/Info", function (req, res) {
    res.sendFile(__dirname + "/Content/info.html")
})

app.post("/LoginAjax", urlencodedParser, function (req, res) {
   
    var user = req.body.user;
    var pwd = crypto.createHash('md5').update(req.body.pwd).digest('hex');

    DB.Query("SELECT count(*) as c from users where nickname= ? and `password`= ?", [user, pwd], function (err, result, fields) {
        

        if (result[0].c > 0) {

            res.cookie("user", user, { maxAge:1000*60 });

            res.send("登陆成功");
        }
        else {

            res.send("用户名密码错误");
        }

    });
   
});

app.post("/RegisterAjax", urlencodedParser, function (req,res) {

    var user = req.body.user;
    var email = req.body.email;
    var pwd = crypto.createHash('md5').update(req.body.pwd).digest('hex') ;
    var pwd2 = req.body.pwd2;

    var sql = "INSERT INTO users (nickname,password,email,createtime) VALUES (?,?,?, now() )";
    var strs = [user, pwd, email];

    DB.Commit(sql, strs, function (err,result,fields) {

        if (err) {
            res.send("注册失败")
        }
        else {

            res.cookie("user", user, { maxAge: 1000 * 60 });

            res.send("注册成功")
        }

    })

})

app.post("/AddAsync", urlencodedParser, function (req,res) {

    var title = req.body.title
    var content = req.body.text
    var user = req.cookies.user

    DB.Query("SELECT id  from users where nickname= ?",[user], function (err, result, fields) {

        var id = result[0].id;

        DB.Commit("INSERT into topic (uid,user,title,content,createtime) VALUES (?,?,?,?,now())", [id, user, title, content], function (err, result, fields) {
            
            res.send("1")
           

        })

    });

})


var server = app.listen(6677);
console.log("NodeJs Server Start!");




