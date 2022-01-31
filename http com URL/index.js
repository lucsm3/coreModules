const http = require('http');
const port = 3000;
const server = http.createServer((req,resp) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

  resp.statusCode = 200;
  resp.setHeader('Contenty-Type', 'text/html');

  if(!name){
resp.end('<h1> preencha seu nome !</h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar"></form>');
  } else {
resp.end('<h1>Seja Bem Vindo: </h1>', name);
  }

})

server.listen(port, () => {
    console.log('servidor rodando na porta:', port);
})