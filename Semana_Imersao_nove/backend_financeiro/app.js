//exportar a dependência 
//



//
const app = express();
//quando houver a necessidade de criar rotas, será a const app que será utilizada
// ou iniciar um servidor 

//para adicionar os operadores no sql
const { Op } = require('sequelize');

//Permitir acesso na API
const cors = require('cors');
const express = require('express');


//criar a constante para chamar a funcao que cria a tabela Extrato
const Extrato = require('./models/Extrato');


// para receber os dados em formato JSON
app.use(express.json());
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});



//
const db = require('./models/db.js');
const { response } = require('express');
//excluido daqui, pois o 'Extrato.js' agora será o responsável por trabalhar com o banco 
 
app.get('/listar/:mes/:ano', async (req, res) => {
  // '/listar' é uma rota que esta recebendo uma funcao 
  // modelo da funcao será  'Arrow functions'

  var mesRecebido = new Number(req.params.mes);
  var anoRecebido = new Number(req.params.ano);

  //console.log(" Mes: " + mesRecebido );
  //console.log(" Ano: " + anoRecebido );

  const date = new Date(anoRecebido + "-" + mesRecebido);
  var primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);//recupera primeiro dia
  var ultimoDia   = new Date(date.getFullYear(), date.getMonth()+1 , 0 );
  //console.log(  date.getMonth() );
  //console.log ( "Primeiro: "+  primeiroDia + " Ultimo " +  ultimoDia );


  //var primeiroDia2 = new Date(anoRecebido, mesRecebido-1, 1);
  //var ultimoDia2   = new Date(anoRecebido, mesRecebido, 0);
  //console.log ( "Segundo teste >>> Primeiro: "+  primeiroDia2 + " Ultimo " +  ultimoDia2 );


  //Esta mensagem fixa não ira aparecer mais 
  //res.send("Extrato Financeiro teste 29/09/2021 ");
  //aogra é para aparecer o que estiverno banco de dados:

  /** Esta função tras as informações ordenado pelo ID
   * Agora será pela data de Vencimento
   */

  const lancamentos = await Extrato.findAll({
      order: [['dataVencimento', 'ASC']],
      where: {
        "dataVencimento":{
          [Op.between]:[ primeiroDia, ultimoDia ],
        }
      }
    })

  const valorAPagar  = await Extrato.sum('valor', {
      //condição
      where:{
        tipo: '1',
        situacao: '2', 
        "dataVencimento":{
          [Op.between]:[ primeiroDia, ultimoDia ],
        }
      }
  });

  const valorAReceber   = await Extrato.sum('valor', {
    //condição
    where:{
      tipo: '2',
      situacao: '1', 
      "dataVencimento":{
        [Op.between]:[ primeiroDia, ultimoDia ],
      }
    }
  });

  const valorPago  = await Extrato.sum('valor', {
    //condição
    where:{
      tipo: '1',
      situacao: '1',
      "dataVencimento":{
        [Op.between]:[ primeiroDia, ultimoDia ],
      }
    }
  });

  const valorRecebido   = await Extrato.sum('valor', {
    //condição
    where:{
      tipo: '2',
      situacao: '1',
      "dataVencimento":{
        [Op.between]:[ primeiroDia, ultimoDia ],
      }
    }
  });

  const deve = new Number( valorPago ) - new Number(   valorAPagar  )  ;

  const saldo = new Number(  valorRecebido ) - deve  ;
  // o que tenho  menos o que devo

    return res.json({
      erro: false,
      lancamentos,
      valorAPagar,
      valorAReceber,
      valorPago ,
      valorRecebido , 
      deve,
      saldo  
    });

    /*

    // order: [['id', 'DESC']]}) //buscar pelo ID
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

    */

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
