var db = {}

var mysql = require("mysql");
var conn = mysql.createConnection({
    host: 'rxcpt009.mysql.rds.aliyuncs.com',
    user: 'rxcpt01',
    password: 'hercules4c4c4c',
    database: 'testcodefirst'

});


conn.connect();

db.Query = function (sql,strs,fun) {

    conn.query(sql,strs,function (error, result, fields) {

        fun(error, result, fields)

    });

}


db.Commit = function (sql, strs, fun) {

    conn.query(sql, strs, function (err,result,fields) {

        fun(err, result, fields)

    })

}



module.exports = db;