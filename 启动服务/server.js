var http = require("http")

http.createServer(function (request,response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('hello node');

}).listen(8888);

console.log("8888 启动完成！")



