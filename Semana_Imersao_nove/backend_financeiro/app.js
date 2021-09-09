//exportar a depend�ncia 
const express = require('express');


const app = express();
//quando houver a necessidade de criar rotas, ser� a const app que ser� utilizada
// ou iniciar um servidor 


const db = require('./models/db.js');
 
app.get('/listar', (req, res) => {
    // '/listar' � uma rota que esta recebendo uma funcao 
    // modelo da funcao ser�  'Arrow functions'

  res.send("Extrato Financeiro teste 09/09/2021 ");
  //o que aparecer� na tela , quando esta rota for chamada 
});


//iniciar o projeto, dentro do listen ter�a porta  
//app.listen(8080);


//apenas para verificar se esta rodando corretamente, mostrar no Console
app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
