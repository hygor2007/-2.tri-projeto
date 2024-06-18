const http = require('http');
const porta = 3000;
const server = http.createServer((req,res) => {
    res.statusCode =  200;
    
    res.setHeader('Content-type','text/plain');

    res.end( 'ola mundo\n');

})
server.listen(porta,() =>{
    console.log(`servidor rodando em http://localhost:${porta}/`);
})
