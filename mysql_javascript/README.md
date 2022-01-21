# Teste para Projeto 

Teste para implementar o Projeto `planilha_freeline`. 
Esta documentação esta sem nenhuma regra,  mas por enquanto preciso que fique registrado o passo_a_passo, com o tempo vou adicionando as regras e escrevendo corretamente.

Projeto principal deve usar: HTML, CSS, Javascript e Banco de Dados. 



Instalar o Mysql para gerenciar o banco de dados; 
Tenho o Wamp  portanto eu já tenho, mesmo assim  vou ir no passo a passo.

Endereço: 	https://www.mysql.com/

Downloads -> MySQL Community (GPL) Downloads versão Gratuita

-> MySQL Community Server


Escolhe o completo,  de baixo 
No thanks, just start my download.



Mysql Server 8.0.28

senha: `123456`

Mysql nas Variaveis de ambiente
finish -> next -> finish 

mysql nas variaveis de ambiente

Copiar o endereço de onde esta o executavel 
	C:\Program Files\MySQL\MySQL Server 8.0\bin
propriedades -> Configurações Avançadas -> Variaveis de ambiente -> Path 

Eidt -> novo -> 'caminho' -> ok
pode ser apenas o de baixo. 



Agora no prompt de comando 
cmd

( -h : para mostrar o host)
(-u: para mostrar o usuario ) 
( -p -  para pedir a senha ) 

 #### mysql -h localhost -u root -p
pedira a senha 

acessou o banco de dados uhul

para ver os bancos de dados 

#### SHOW DATABASES;

Tem apenas as bases padrão sem as nossas que foram criadas antes; 


criar base de dados 

#### CREATE DATABASE nome_do_banco_de_dados;


acessar a base de dados
#### USE celke;

resposta "Database changed"

criar uma tabela
#### CREATE TABLE users ( nome VARCHAR(150), email VARCHAR(100));


Lembre se de finalizar sempre com ';'

para ver as tabelas existentes
#### SHOW TABLES;

inserir valores no banco de dados:

####  INSERT INTO users (nome, email) VALUES ('Cesar' , 'cesar@email.com');


Selecionar as informações do banco de Dados
#### SELECT * FROM users; 

para sair digite >>>> exit 




------------------------------------
Agora usando um gerenciador de banco de Dados
MySQL Workbenck

	https://www.mysql.com/products/workbench/

Manipular o banco de dados de forma visual. 

-> Downloads -> gpl -> MySQL Workbench

MySQL Workbench 8.0.28

baixar e instalar

onde ele ficará instalado: C:\Program Files\MySQL\MySQL Workbench 8.0 CE\

Mesmo usado no Linux com o Yamada; 

quando abre o workbench  ja aparece a sua base criada anteriormente, clique nela,  ira aparecer para digitar a sua senha 
Digitou, esta correta, ja pode entrar.

vá em SCHEMAS
aparecerá a base de Dados 'celke' que foi criada anteriormente no cmd. 

Clique duplo no banco de dados para ver as tabelas 


Clique em Tables ( aparece as tabelas deste banco) -> users( aparece as colunas desta tabela) 
Clique ao lado do nome da tabela, em um ícone que parece uma chave philco ( tools) 

Pode se modificar os dados recebidos pelas Colunas 
no campo Charset/Collation passar as informações para utf8

para salvar as alterações: Apply -> Apply -> Finish

botão do mouse Direito em cima do nome 'Tables' -> 'Create Tables ...'

Adicione o nome da tabela
modifique o chaset/Collation e o Default Collation
Nos campos de baixo adicione coluna por coluna que terá na tabela adicionando  o 'Datatype' e marcando as características. 

Apply -> 
 o sistema mostra o que foi que criou 

CREATE TABLE `celke`.`contas_pagas` (
  `id_contas_pagas` INT NOT NULL,
  `nome_contas_pagas` VARCHAR(45) NULL,
  `valor_contas_pagas` DOUBLE NULL,
  `contas_pagascol` VARCHAR(45) NULL,
  PRIMARY KEY (`id_contas_pagas`));

Apply -> Finish 

ALTER TABLE `celke`.`contas_pagas` 
CHANGE COLUMN `id_contas_pagas` `id_contas_pagas` INT NOT NULL AUTO_INCREMENT ;


Alteração para todo o banco de dados 
ALTER SCHEMA `celke`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_unicode_ci ;

---------------------

Mais testes
====================

Agora vamos para o sistema que devemos criar 

Node.js #7 - Node + MySQL + Workbench - Como conectar o Node com banco de dados

Este é o site anterior
Node.js #6 - Como carregar arquivo HTML no Node.js

videos desde o inicio
Node.js #1 - O que é Node e como instalar o Node.js no Windows

Node.js #2 - Como usar o Node.js na prática
	https://www.youtube.com/watch?v=qxkXSDTL5LY&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=2

cria a pasta onde vai ser trabalhado
cria o arquivo  'index.js'
adiciona dentro do arquivo o console.log('Ola Mundo');
volta no cmd e digite >>>>> node index.js

apresentará no cmd a frase
criado o diretorio 'modules'
criado o arquivo 'calDesconto.js'

criar a funcao dentro deste arquivo;

Node.js #3 - Criar o servidor http na maquina com Node e imprimir o texto no navegador usando o Node
	https://www.youtube.com/watch?v=7Oem0XPdTbg&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=3



incluir o modulo do node 'http'

baseado na Documentação do Node
node -> docs -> Usage and example 


no terminal digite o  'node index.js'
e abra o navegador com 'localhost:8080'

Toda a vez que fizer uma modificação , faça  parar o sistema "ctrl" + "c" e reinicie o node novamente "node index.js"


Node.js #4 - Como instalar o Express no Node.js e criar rotas no Node.js

Instalar o Express

https://expressjs.com/

Instalar com npm 

#### npm install express --save 
$ npm install express --save
neste momento cria o diretorio >>> node_modules 
contendo os aquivos solicitados 


agora começa a trabalhar com ""rotas ""
Dentro do arquivo index.js
criar a referencia ao Express


novamente no terminal >>>>> node index.js


criado outras chamadas de paginas
http://localhost:8080/blog

mesmo fato.

Tutorial 
	https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm



Node.js #5 - Como instalar o Nodemon no Node.js para o servidor ser recarregado automaticamente

https://www.youtube.com/watch?v=76fP9ValZIE&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=5

instalar nodemon - atualizar automatico do servidor
para reinciar o servido do node 

ctrl + c ( para parar )
node index.js ( para reiniciar )

instalar nodemon
https://www.npmjs.com/package/nodemon

####  npm install -g nodemon

****************
*
*  nodemon nao instalado no sistema.
*
*****************

ocorreu a mesma situação no pc de casa.
abri um cmd e fiz a mesma coisa,  e deu certo  
npm install -g nodemon

nodemon -v
2.0.15

pelo terminal do VS Code não funciona
pelo terminal do CMD funciona.

nodemon index.js

uhuu ... faz a modificação no codigo e atualiza a pagina no navegador ... deu certo


[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`

resposta do cmd , adorei



Node.js #6 - Como carregar arquivo HTML no Node.js
https://www.youtube.com/watch?v=2h8jg2cZT1M&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=6


index.js virá app.js

o Terminal já informará erro.
ctrl + c para pausar
reinicia o 'nodemon' mas agora com o nome do arquivo principal

>>>> nodemon app.js

no navegor esta tudo ok , sem mudanças. 
criar o diretorio 'src' e dentro dele o arquivo 'index.html'

crie um conteudo para o arquivo index;

no arquivo app.js, na rota que busca pelo arquivo 
na parte que que antes buscava uma frase/string agora ira buscar um arquivo 

antes: 'res.send("Pagina do Gerenciador");'
agora: 'res.sendFile(__dirname + "/src/index.html");'

Até aqui a nossa pagina de teste , esta abrindo no navegador,  apenas com localhost:8080. 

Agora ir para os próximos passos.

A partir daqui adicionar no readme.md

Estamos no video 07

Node.js #7 - Node + MySQL + Workbench - Como conectar o Node com banco de dados

	https://www.youtube.com/watch?v=5JnPd_YckQw&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=7

Instalar o MYSQL 

Depois de instalar e adicionar na Variável de ambiente, abrir e trabalhar no prompt de Comando

#### mysql -h localhost -u root -p
( -h onde esta o banco de dados )
( -u para o usuário)
( -p  para a senha )

#### SHOW DATABASES;
Para mostrar todas as bases de dados criadas;

#### CREATE DATABASE celke;
Para criar uma base de dados, neste caso com o nome 'celke';

#### USE celke;
Para entrar na tabela

#### CREATE TABLE users (nome VARCHAR(200), email VARCHAR(100));
Para criar uma tabela com suas colunas,  e o tipo e tamanho de cada uma das colunas. 


#### SHOW TABLES;
Para mostrar as tabelas que existe;

#### INSERT INTO users (nome, email) VALUES ('Cesar' , 'cesar@email.com');

Para inserir valores na tabela.

#### SELECT * FROM users;
Para mostrar o conteudo da tabela.


#### MYSQL WORKBENCH

Agora iremos usar a Ferramenta para gerenciar o banco de dados  de forma gráfica.

## Implementar a Conexão com o Banco de Dados

Com as páginas já existentes, vamos fazer o sistema se comunicar com o banco de Dados.

Instalar a extensão `mysql` 
Primeiro criar o arquivo `json`.

CMD para o node. 
#### npm init
Para criar o arquivo de configuração.
Apresenta os atributos que devem ser preenchidos.
o que ficar igual apenas clique em 'enter'

Para o atributo 'test command' (Teste de Comando) usaremos:
`echo \"Error: no test specified\" && exit 1`

## Extensão MYSQL
	https://www.npmjs.com/package/mysql

#### npm install mysql
Por teste iremos usar ( temporariamente ) a conexão com o banco no arquivo principal 'app.js'.




