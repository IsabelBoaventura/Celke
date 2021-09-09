//exportar a dependência 
const express = require('express');


const app = express();
//quando houver a necessidade de criar rotas, será a const app que será utilizada
// ou iniciar um servidor 


const db = require('./models/db.js');
 
app.get('/listar', (req, res) => {
    // '/listar' é uma rota que esta recebendo uma funcao 
    // modelo da funcao será  'Arrow functions'

  res.send("Extrato Financeiro teste 09/09/2021 ");
  //o que aparecerá na tela , quando esta rota for chamada 
});


//iniciar o projeto, dentro do listen teráa porta  
//app.listen(8080);


//apenas para verificar se esta rodando corretamente, mostrar no Console
app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
