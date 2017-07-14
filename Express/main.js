var express = require('express')
var app = express();


//Post
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get("/", function (req, res) {
    res.send("Hello Node");
    res.send(req.cookies)
});

app.get("/Home", function (req, res) {
    res.send("Home");
});

app.get("/Login", function (req,res) {
    
    res.sendFile(__dirname+"/index.html");
})

app.get("/User", function (req, res) {
   
    res.send(req.query.id);
    console.log(req.query)
})

app.post("/Page", urlencodedParser, function (req, res) {
    
    console.log(req.body);
    res.send("呵呵呵呵呵")

})

app.get("/FilesPage", function (req, res) {
    res.sendFile(__dirname+"/Files.html")
})

app.post("/Files", function (req, res) {

    console.log(req)
    res.send("哒哒哒哒哒哒");
})

var server = app.listen(1556);
console.log("1556 => Success");



