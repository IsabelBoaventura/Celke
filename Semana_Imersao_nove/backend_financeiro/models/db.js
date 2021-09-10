const { Sequelize } =  require('sequelize');
//componente com Letra inicial maiuscula 

let bancoDeDados = 'celke';
let usuario = 'root';
let senha = '';

//credenciais do banco 
const sequelize =  new Sequelize( bancoDeDados  ,  usuario , senha, {
    host: 'localhost',
    dialect: 'mysql'
    //tipo de banco de dados

});

//para verificar se esta acontecendo a conexão com o banco de dados 
sequelize.authenticate()
    .then(function(){
        console.log("Sucesso");
    }).catch(function(err){
        console.log("Falha na Conexao " + err);
});

//esta é a verificação de conexao com o banco, recomendado nao ter no sistema em producao


//para usar tem de exportar as credenciais 
module.exports = sequelize;

