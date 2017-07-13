var express = require('express')
var app = express();


//Post
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", function (req, res) {
    res.send("Hello Express");
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

app.post("/Page", urlencodedParser, function (res, req) {
    
    console.log(req);
    res.send("呵呵呵呵呵")

})

var server = app.listen(8888);
console.log("8888 => Success");

//------------------------------------------------------------


//var express = require('express');
//var app = express();

//app.use(express.static('public'));

//app.get('/', function (req, res) {
//    res.sendFile(__dirname + "/" + "index.html");
//})

//app.post('/process_get', function (req, res) {

   
//    var response = {
//        "first_name": req.query.first_name,
//        "last_name": req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
//})

//var server = app.listen(8081, function () {

//    var host = server.address().address
//    var port = server.address().port

//    console.log("应用实例，访问地址为 http://%s:%s", host, port)

//})


