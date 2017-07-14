var mysql = require("mysql");
var conn = mysql.createConnection({
    host: 'rxcpt001.mysql.rds.aliyuncs.com',
    user: 'rxcpt01',
    password: 'hercules4c4c4c',
    database: 'testcodefirst'
});

conn.connect();


// 查询 
//var sql = "SELECT * from huochetoutest";
//conn.query(sql,function (error, result, fields) {

//    for (var i in result) {
//        console.log(result[i].content)
//    }
//});


// 插入
var sql = "insert into huochetoutest values (?,?,?)";
var strs = [1240,"男人看了会沉默", "女人看了会流泪"];
conn.query(sql, strs, function (error, results) {

    console.log(results.insertId)

});

 

