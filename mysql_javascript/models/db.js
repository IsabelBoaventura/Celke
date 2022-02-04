const Sequelize = require('sequelize');



const sequelize = new Sequelize('planilha_freeline', 'admin_tabela', '123456', {
    host: 'localhost', 
    dialect: 'mysql'
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize

}
