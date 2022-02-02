const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req,resp) => {
fs.readfile('mensagem.html', function(err,data){
resp.writeHead(200, {'Content-Type':'text/html'})
resp.write(data)
return resp.end()
});
})

server.listen(port, () => {
    console.log('servidor rodando na porta:', port);
})
