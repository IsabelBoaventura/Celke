const express =  require("express");

const app = express();

const mysql = require('mysql');

//Conectar no banco de Dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin_tabela',
    password: '123456',
    database: 'planilha_freeline'
});

//Resposta da Conexao
connection.connect( function (err) {
    if(err){
        console.error('Erro ao realizar a conexao  com o DB: ' + err.stack);

        console.log('Erro na Conexao: ' + err.stack );
        return;
    }
    console.log('Conectado no ID: ' + connection.threadId);    
});


//INserir na tabela usuarios
let sql_insert = "INSERT INTO usuarios (Nome_Usuario, `Genero`,  `EMail`, `Senha`, `Tipo`, `Situacao`, `Usuario_Criacao`, `Usuario_Alteracao`, `Ativo`, `DH_Criacao`, `DH_Alteracao`, Data_Nascimento)   VALUES ( 'teste', '1',  'emialteste@teste.com.br', '123', '1', '1', '0', '0', '1', '2022-01-18 20:06:22', '2022-01-18 20:06:22', '1981-10-10') ";

connection.query( sql_insert, function (err, result){
    if(! err){
        console.log('Usuario Cadastrado com sucesso!');
    }else{
        console.log('Erro ao cadastrar o usuario!');
        console.error( err.stack);28
    }
});


//alterar informações ja existentes no Banco de Dados
let sql_update = "UPDATE  usuarios SET Nome_Usuario = 'Quem sera ',  `EMail` = 'emailquem@email.com.br' , Data_Nascimento = '1990-10-10' WHERE Id_Usuarios = 6";

connection.query( sql_update, function (err, result){
    if(! err){
        console.log('Usuario Alterado com sucesso!');
    }else{
        console.log('Erro ao Alterar o usuario!');
        console.error( err.stack);
    }
});

//alterar informações ja existentes no Banco de Dados
let sql_delete = "DELETE FROM usuarios WHERE Id_Usuarios = 8";

connection.query( sql_delete, function (err, result){
    if(! err){
        console.log('Usuario DELETADO com sucesso!');
    }else{
        console.log('Erro ao DELETAR o usuario!');
        console.error( err.stack);
    }
});

/*


//Buscando as informações de uma tabela
connection.query('SELECT * FROM users', function( err, rows, fields){
    if(!err){
        console.log('Resultado: ' , rows );
    }else{
         console.log( 'Erro ao realizar a Consulta ' );  
    }
  
});

*/

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

