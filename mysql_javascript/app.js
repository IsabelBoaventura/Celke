const express = require("express");
const app = express();
//const handlebars = require("express-handlebars");
//
const { engine } = require ('express-handlebars');

const bodyParser =  require('body-parser');
const moment = require('moment');
const Pagamento = require("./models/Pagamento");


/* desta forma funciona,  mas da erro na apresentação das informações do Banco de dadeos 

  app.engine('handlebars', handlebars({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }));
    app.set("view engine", "handlebars");
*/


  
app.engine('handlebars', engine({
    defaultLayout: 'main',
        helpers:{
            formatDate: (date) => {
                return moment(date).format('DD/MM/YYYY')
            }

        },
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }

}));
app.set('view engine', 'handlebars');
app.set("views", "./views");



  /*
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");
*/




app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());



//Rota LISTAR pagamentos
app.get('/pagamento', function(req, res ){
    Pagamento.findAll({
           order: [['id', 'DESC']]
    }).then( function(pagamentos){
        res.render('pagamento', {pagamentos: pagamentos})
    }).catch(function(erro){
        res.send("Erro ao listar os pagamentos ja efetuados " + erro)

    });
   // res.render('pagamento');
});



//Rota para pagamento

app.get('/cad-pagamento', function(req, res ){
   // res.send('Formulario para cadastrar pagamento');
   res.render('cad-pagamentos');
});

//adicionando os pagamentos 
app.post('/add-pagamento', function(req, res ){
   // res.send('Formulario para cadastrar pagamento');
   //res.send("Nome: " + req.body.nome + "<br>Valor: "+ req.body.valor + "<br>" );
    Pagamento.create({
       nome: req.body.nome,
       valor: req.body.valor
    }).then(function(){
       //res.send("Pagamento Cadastrado com Sucesso!")
      //res.render('pagamento');
        Pagamento.findAll({
            order: [['id', 'DESC']]
        }).then( function(pagamentos){
             res.render('pagamento', {pagamentos: pagamentos})
        });
    }).catch(function(erro){
           res.send("Erro no cadastro do Pagamento. " + erro)
    });

    //res.render('pagamento');

});

// Apagar registro de pagamento
app.get('/del-pagamento/:id', function( req, res){
    Pagamento.destroy({
        where: {'id' : req.params.id}
    }).then( function(){
        res.send("Pagamento apagado com Sucesso!");
    }).catch( function ( erro ){
        res.send( "Erro ao Apagar pagamento " + erro)
    })

});






//Usuarios da Planilha- Freeline
app.get('/usuarios', function(req, res ){
    res.render('usuarios');
});



app.listen(8080, () => {
    console.log('o web server esta trabalhando na porta 8080.');
});