//阻塞代码示例

var fs = require('fs')
var data = fs.readFileSync("dd.txt")

console.log(data.toString())
console.log("endding")


//非阻塞代码
var fs = require('fs');
fs.readFile("dd.txt", function (err, data) {
   console.log(data.toString())
});

console.log("ending.....")