const Sequelize = require ('sequelize');

const sequelize = new Sequelize('planilha_freeline', 'admin_tabela', '123456', {
    host: 'localhost', 
    dialect: 'mysql'
});

sequelize.authenticate().then( function(){
    console.log('Conexao realizada com sucesso!');
} ).catch( function( err ){
    console.log('Erro ao realizar a conexao com o BD: ' + err );
});




/**
 * 

CREATE TABLE IF NOT EXISTS `clientes` (
  `Id_Clientes` int(11) NOT NULL AUTO_INCREMENT,
  `Dominio` int(11) NOT NULL,
  `Razao_Social` varchar(150) NOT NULL,
  `Nome_Fantasia` varchar(100) NOT NULL,
  `CPF_CNPJ` varchar(20) NOT NULL,
  `IE_RG` varchar(20) NOT NULL,
  `Situacao` varchar(1) NOT NULL,
  `Usuario_Criacao` int(11) NOT NULL,
  `Usuario_Alteracao` int(11) NOT NULL,
  `DH_Criacao` datetime NOT NULL,
  `DH_Alteracao` datetime NOT NULL,
  `Telefone` varchar(25) NOT NULL,
  PRIMARY KEY (`Id_Clientes`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=253 ;
 */

const Cliente = sequelize.define('clientes', {
  
    Dominio: {  type: Sequelize.INTEGER }, 
    Razao_Social: { type: Sequelize.STRING },
    Nome_Fantasia: {    type: Sequelize.STRING },
    CPF_CNPJ:{  type: Sequelize.STRING },
    IE_RG: {  type: Sequelize.STRING },
    Situacao: {  type: Sequelize.STRING },
    Usuario_Criacao: {  type: Sequelize.STRING },
    Usuario_Alteracao: {  type: Sequelize.STRING },
    Telefone: {  type: Sequelize.STRING }
});

//Criar tabela com Sequelize, cria uma unica vez 
//Cliente.sync({force: true});




// Adicionando Dados na tabela
/** 
 * 
 * (1, 1747, 'LEIDE DAYANE PEREIRA RODRIGUES', 'A CONDESSA', '', '', 'A', 0, 0, '2022-01-21 13:02:09', '0000-00-00 00:00:00', '(47) 3804-4014'),

*/

/*

Cliente.create({

    Dominio: '1747', 
    Razao_Social: 'LEIDE DAYANE PEREIRA RODRIGUES',
    Nome_Fantasia:  'A CONDESSA',
    CPF_CNPJ: '',
    IE_RG: '',
    Situacao: 'Ativo',
    Usuario_Criacao: 'Sequelize Mysql' ,
    Usuario_Alteracao: '',
    Telefone: '(47) 3804-4014'
});

*/


/** 
 * 
 * (1, 1747, 'LEIDE DAYANE PEREIRA RODRIGUES', 'A CONDESSA', '', '', 'A', 0, 0, '2022-01-21 13:02:09', '0000-00-00 00:00:00', '(47) 3804-4014'),

*/


/**
 * 
 * teste 2
 * 
 * 
 * (2, 0, '3M TEM', '3M TEM', '', '', 'A', 0, 0, '2022-01-21 13:02:09', '0000-00-00 00:00:00', '(47) 3448 3357'),
(3, 679, 'MARIA MERCES VIEIRA - ME', 'A FAVORITA', '', '', 'A', 0, 0, '2022-01-21 13:02:09', '0000-00-00 00:00:00', '(47) 3448-1079'),
(4, 142, 'ABRAVAR FERRO, PEÇAS E SERV. NAVAIS LTDA', 'ABRAVAR', '', '', 'A', 0, 0, '2022-01-21 13:02:09', '0000-00-00 00:00:00', '(41) 3442-2441'),
(5, 642, 'ACLIVE DO BRASIL INDÚSTRIA E COMÉRCIO LTDA', 'ACLIVE - PR', '', '', 'A', 0, 0, '2022-01-21 13:02:09', '0000-00-00 00:00:00', '(41) 3606-9147'),

 */

Cliente.create({
    Razao_Social: '3M TEM',
    Nome_Fantasia:   '3M TEM',
    Situacao: 'Ativo',
    Usuario_Criacao: 'Sequelize Mysql' ,
    Telefone: '(47) 3448 3357',
});


