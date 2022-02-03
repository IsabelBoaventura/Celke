const express = require("express");
const app = express();
//const handlebars = require("express-handlebars");
const { engine } = require ('express-handlebars');

const bodyParser =  require('body-parser');




app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");


app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());


//Rota para pagamento

app.get('/cad-pagamento', function(req, res ){
   // res.send('Formulario para cadastrar pagamento');
   res.render('cad-pagamentos');
});
app.post('/add-pagamento', function(req, res ){
   // res.send('Formulario para cadastrar pagamento');
   res.send("Nome: " + req.body.nome + "<br>Valor: "+ req.body.valor + "<br>" );
});


//Rota LISTAR pagamentos
app.get('/pagamento', function(req, res ){
    res.render('pagamento');
});


//Usuarios da Planilha- Freeline
app.get('/usuarios', function(req, res ){
    res.render('usuarios');
});



app.listen(8080, () => {
    console.log('o web server esta trabalhando na porta 8080.');
});