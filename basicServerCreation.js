const HTTP = require('http');

HTTP.createServer((req,resp)=>{
    resp.write("<h1>Hello, I am Developer</h1>")
    resp.end()
}).listen(3000)