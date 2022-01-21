/* 01
console.log('Ola Mundo!');
console.log('Gerenciador Financeiro!');*/

/* 02
var cliente  = "Nome do Cleinte";
console.log('Cliente: ' + cliente );


var valorProduto = 100;
var valorDesconto = 37;


var descontoFuncao = require("./modules/calDesconto");

 var finalValor = descontoFuncao( valorProduto, valorDesconto);
 console.log(finalValor );

 */


/* 03 

var http = require('http');
http.createServer( function ( req, res ){
    res.end("Gerenciador Financeiro");

}).listen(8080);

*/
const express =  require("express");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/src/index.html");
   // res.send("Gerenciador de Estoque 20-01-2022 20:28 Isabel ") 
});



app.get("/contato", function(req, res) {
      res.sendFile(__dirname+"/src/contato.html");__dirname+"/src/index.html"//
    

    //res.send("Gerenciador de Contato ") 
});



app.get("/blog", function(req, res) {

    res.send("Pagina de Blog") 
});



app.get("/sobre-empresa", function(req, res) {

    res.send("Pagina Sobre a Empresa") ;
});

app.listen(8080)

