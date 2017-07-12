var http = require('http');

http.createServer(req).listen(8888);

function req(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    
    response.end('Hello World');
}

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');