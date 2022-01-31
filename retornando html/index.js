const http = require('http');
const port = 3000;
const server = http.createServer((req,resp) => {

  resp.statusCode = 200;
  resp.setHeader('Contenty-Type', 'text/html');
  resp.end('<h1>Olá, este é meu primeiro server com html</h1><p>testando atualização</p>');

})

server.listen(port, () => {
    console.log('servidor rodando na porta:', port);
})