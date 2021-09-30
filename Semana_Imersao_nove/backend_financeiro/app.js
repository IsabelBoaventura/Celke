//exportar a dependência 
//
const express = require('express');


//
const app = express();
//quando houver a necessidade de criar rotas, será a const app que será utilizada
// ou iniciar um servidor 


//criar a constante para chamar a funcao que cria a tabela Extrato
const Extrato = require('./models/Extrato');


// para receber os dados em formato JSON
app.use(express.json());


//
const db = require('./models/db.js');
const { response } = require('express');
//excluido daqui, pois o 'Extrato.js' agora será o responsável por trabalhar com o banco 
 
app.get('/listar', async (req, res) => {
  // '/listar' é uma rota que esta recebendo uma funcao 
  // modelo da funcao será  'Arrow functions'

  //Esta mensagem fixa não ira aparecer mais 
  //res.send("Extrato Financeiro teste 29/09/2021 ");
  //aogra é para aparecer o que estiverno banco de dados:

  await Extrato.findAll({order: [['id', 'DESC']]})
    .then(function( extratos){
      return res.json({
        erro: false,
        extratos
      });
    })
    .catch(function(){
      return res.json({
        erro: true,
        mensagem: "Erro: Nenhum lancamento encotrado! "
      });
    });

  //findAll funcao para buscar todos os registros do banco, funcao do sequelize


 
  //o que aparecerá na tela , quando esta rota for chamada 
});


//cadastrar um registro
//req => requisicao 
//res => resposta 
app.post('/cadastrar', async ( req, res )=>{

  //para gravar as informações no banco de dados 
  //aplicando a create ja podemos excluir as outras funcoes 
  await Extrato.create(req.body)
    .then( function(){
      return res.json({
        erro:false,
        mensagem: "Lancamento Cadastrado com Sucesso!"
      });
    })
    .catch( function(){
      return res.status( 400 ).json({
        erro: true,
        mensagem:   "Cadastro de Lancamento com ERRO!"
      });
    });

  //tratar o recebimento dos dados //req == requisicao
  //console.log(req.body);

  //res.send("Cadastrar");
});


//iniciar o projeto, dentro do listen terá a porta  
//app.listen(8080);


//apenas para verificar se esta rodando corretamente, mostrar no Console
app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
