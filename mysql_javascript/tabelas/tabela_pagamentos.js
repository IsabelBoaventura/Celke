const Sequelize = require('sequelize');



const sequelize = new Sequelize('planilha_freeline', 'admin_tabela', '123456', {
    host: 'localhost', 
    dialect: 'mysql'
});


sequelize.authenticate().then(function(){
    console.log('Conexao Realizada com Sucesso!');
}).catch( function( err ){
    console.log('Erro ao realizar a conexao com o BD: ' + err );
});



const Pagar = sequelize.define('pagamentos', {
    nome:{
        type: Sequelize.STRING,
    }, 
    valor: {
        type: Sequelize.DOUBLE
    }
});

//Criar a tabela 
//Pagar.sync({force: true });


Pagar.create({
    nome: "Energia", 
    valor: 25.60
});

