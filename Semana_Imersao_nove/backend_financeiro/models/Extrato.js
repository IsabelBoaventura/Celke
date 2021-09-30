//conexao com a instancia 
const Sequelize = require('sequelize');
//const { Extrato } = require('sequelize/types/lib/query-types');

//conexao com o banco de dados 
const db = require('./db');

// cria nova constante que informa para o banco que quer criar uma nova tabela 
// primeiro argumento  � o nome da tabela seguido  pelos campos 
const Extrato = db.define('extratos', {
    id : {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
    }, 
    nome: {
        type: Sequelize.STRING,        
        allowNull: false, 
    }, 
    valor: {
        type: Sequelize.DOUBLE,        
        allowNull: false, 
    },
    //Tipo 1 == Pagamento 
    //Tipo 2 == Recebimento
    tipo: {
        type: Sequelize.INTEGER,        
        allowNull: false, 
    },
    // se j� foi quitada , ou esta pendente
    //Tipo 1 == Pago 
    //Tipo 2 == Pendente
    situacao:{
        type: Sequelize.INTEGER, 
        allowNull: true
        //indica que n�o � obrigat�rio ter esta informacao no banco
    }, 
    dataVencimento:{
        type: Sequelize.DATE,
        allowNull: false
    }, 
    dataPagamento: {
        type: Sequelize.DATE,
        allowNull: true
    }

});


//para alterar a tabela j� existente
//Extrato.sync({ alter: true }); 

//Extrato.sync();//nome_da_tabela.funcao
//Depois que  o banco de Dados foi criado, j� pode comentar,  pois a tabela n�o precisar ser criada novamente 
module.exports = Extrato;