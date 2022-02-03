const express = require("express");
const app = express();
const exphbs = require("express-handlebars");


/* */
app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));


app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('main');
});

app.get('/add-pagamento', function (req, res ){
    res.send("Formulario para cadastrar pagametnos . ");
});

app.listen(8080, () => {
    console.log('Problemas ao Inciar na porta 8080');
});