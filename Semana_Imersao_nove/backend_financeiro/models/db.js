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


//para usar tem de exportar as credenciais 
module.exports = sequelize;

