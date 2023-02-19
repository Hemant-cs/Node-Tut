const HTTP = require('http');
const data = require('./Data');

HTTP.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-Type":"application\json"})
    resp.write(JSON.stringify(data))
    resp.end()
}).listen('3000')