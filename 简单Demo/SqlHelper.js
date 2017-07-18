var db = {}

var mysql = require("mysql");
var conn = mysql.createConnection({
    host: 'rxcpt001.mysql.rds.aliyuncs.com',
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
module.exports.Query = db.Query;