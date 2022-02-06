# Teste para Projeto 

Teste para implementar o Projeto `planilha_freeline`.

Esta documentação esta sem nenhuma regra,  mas por enquanto preciso que fique registrado o passo_a_passo, com o tempo vou adicionando as regras e escrevendo corretamente.

A medida que a informação estiver correta neste projeto de teste, vou adicionando no projeto original.

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

## Agora usando um gerenciador de banco de Dados
MySQL Workbenck

	https://www.mysql.com/products/workbench/

Manipular o banco de dados de forma visual. 

-> Downloads -> gpl -> MySQL Workbench

MySQL Workbench 8.0.28

baixar e instalar

onde ele ficará instalado: 
	
	C:\Program Files\MySQL\MySQL Workbench 8.0 CE\

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
 <pre>
CREATE TABLE celke.contas_pagas (
  id_contas_pagas INT NOT NULL,
  nome_contas_pagas VARCHAR(45) NULL,
  valor_contas_pagas DOUBLE NULL,
  contas_pagascol VARCHAR(45) NULL,
  PRIMARY KEY (id_contas_pagas));
</pre>
Apply -> Finish 

## Guardar esta informação

<pre>
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin_tabela',
    password: '123456',
    database: 'planilha_freeline'
});
</pre>

<pre>
ALTER TABLE celke.contas_pagas 
CHANGE COLUMN id_contas_pagas id_contas_pagas INT NOT NULL AUTO_INCREMENT ;
</pre>

Alteração para todo o banco de dados 
ALTER SCHEMA `celke`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_unicode_ci ;


## Mais testes

Agora vamos para o sistema que devemos criar 

* Node.js #7 - Node + MySQL + Workbench - Como conectar o Node com banco de dados

Este é o site anterior
* Node.js #6 - Como carregar arquivo HTML no Node.js

videos desde o inicio
* Node.js #1 - O que é Node e como instalar o Node.js no Windows

* Node.js #2 - Como usar o Node.js na prática

	https://www.youtube.com/watch?v=qxkXSDTL5LY&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=2

cria a pasta onde vai ser trabalhado
cria o arquivo  'index.js'
adiciona dentro do arquivo o console.log('Ola Mundo');
volta no cmd e digite >>>>> node index.js

apresentará no cmd a frase
criado o diretorio 'modules'
criado o arquivo 'calDesconto.js'

criar a funcao dentro deste arquivo;

* Node.js #3 - Criar o servidor http na maquina com Node e imprimir o texto no navegador usando o Node

	https://www.youtube.com/watch?v=7Oem0XPdTbg&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=3



incluir o modulo do node 'http'

baseado na Documentação do Node
node -> docs -> Usage and example 


no terminal digite o  'node index.js'
e abra o navegador com 'localhost:8080'

Toda a vez que fizer uma modificação , faça  parar o sistema "ctrl" + "c" e reinicie o node novamente "node index.js"


* Node.js #4 - Como instalar o Express no Node.js e criar rotas no Node.js

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



* Node.js #5 - Como instalar o Nodemon no Node.js para o servidor ser recarregado automaticamente

	https://www.youtube.com/watch?v=76fP9ValZIE&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=5

instalar nodemon - atualizar automatico do servidor
para reinciar o servido do node 

ctrl + c ( para parar )
node index.js ( para reiniciar )

instalar nodemon

	https://www.npmjs.com/package/nodemon

####  npm install -g nodemon


*  nodemon nao instalado no sistema.

ocorreu a mesma situação no pc de casa.
abri um cmd e fiz a mesma coisa,  e deu certo  
####  npm install -g nodemon

#### nodemon -v
2.0.15

pelo terminal do VS Code não funciona
pelo terminal do CMD funciona.

#### nodemon index.js

uhuu ... faz a modificação no codigo e atualiza a pagina no navegador ... deu certo

<pre>
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
</pre>
resposta do cmd , adorei



* Node.js #6 - Como carregar arquivo HTML no Node.js

	https://www.youtube.com/watch?v=2h8jg2cZT1M&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=6


index.js virá app.js

o Terminal já informará erro.
ctrl + c para pausar
reinicia o 'nodemon' mas agora com o nome do arquivo principal

#### nodemon app.js

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

* Node.js #7 - Node + MySQL + Workbench - Como conectar o Node com banco de dados

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
\' echo \"Error: no test specified\" && exit 1 \'

## Extensão MYSQL

	https://www.npmjs.com/package/mysql

#### npm install mysql
Por teste iremos usar ( temporariamente ) a conexão com o banco no arquivo principal 'app.js'.

Tanto o nodemon quanto a página não apresentaram erro.

Conforme a Orientação do Manual, passado para o sistema. 

nodemon apresentando o erro

<pre>
D:\projetos\Celke\mysql-node-javascript>nodemon app.js
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
error connecting: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
    at Handshake.Sequence._packetToError (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\protocol\sequences\Sequence.js:47:14)
    at Handshake.ErrorPacket (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\protocol\sequences\Handshake.js:123:18)
    at Protocol._parsePacket (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\protocol\Protocol.js:291:23)
    at Parser._parsePacket (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\protocol\Parser.js:433:10)
    at Parser.write (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\protocol\Parser.js:43:10)
    at Protocol.write (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\protocol\Protocol.js:38:16)
    at Socket.<anonymous> (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\Connection.js:88:28)
    at Socket.<anonymous> (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\Connection.js:526:10)
    at Socket.emit (node:events:365:28)
    at addChunk (node:internal/streams/readable:314:12)
    --------------------
    at Protocol._enqueue (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\protocol\Protocol.js:144:48)
    at Protocol.handshake (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\protocol\Protocol.js:51:23)
    at Connection.connect (D:\projetos\Celke\mysql-node-javascript\node_modules\mysql\lib\Connection.js:116:18)
    at Object.<anonymous> (D:\projetos\Celke\mysql-node-javascript\app.js:47:12)
    at Module._compile (node:internal/modules/cjs/loader:1109:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1138:10)
    at Module.load (node:internal/modules/cjs/loader:989:32)
    at Function.Module._load (node:internal/modules/cjs/loader:829:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47

</pre>

Este erro se refere a Autorização de usuário.
Criar um novo Usuário .
Abra um novo prompt de comando.
Neste novo CMD iremos configurar o novo usuario.

#### mysql -h localhost -u root -p

Para criar um novo usuario:

#### CREATE USER 'admin_tabela'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

Responde com um Query ok e 0 linhas afetadas.

Adicionar o usuario recem criado no sistema e reiniciar o nodemon. 
Resposta: Erro: Usuario sem permissão no banco de Dados.
Para adicionar as permissões
Volte no CMD que estava trabalhando com o MYSQL.
Adicione:
#### GRANT ALL PRIVILEGES ON *.* TO 'admin_tabela'@'localhost';

Liberar todos os privilégios para este Usuario.
Reinicie o nodemon.
Resposta:
<pre>

D:\projetos\Celke\mysql-node-javascript>nodemon app.js
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Conectado no ID: 58

</pre>

Conexão realizada com sucesso! uhul

No sistema,  vamos executar uma query para mostrar os dados da tabela, para verificarmos se as informações estão aparecendo. 

<pre>
D:\projetos\Celke\mysql-node-javascript>nodemon app.js
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectado no ID: 62
[nodemon] starting `node app.js`
Conectado no ID: 115
Resultado: [object Object]
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectado no ID: 116
Resultado:  [ RowDataPacket { nome: 'Cesar', email: 'cesar@email.com' } ]

</pre>

* Node.js #8 - Como cadastrar com Node.js no banco de dados

Usando o MySQL Workbench criamos o schema ( banco de dados ) planilha_freeline;

vamos ver a conexao se esta funcionando. 

Criamos o Banco de Dados (schema) 'planilha_freeline', a tabela 'usuarios' e seu campos, no MySQL WorkBench;

Fizemos o sistema inserir no banco. 


* Node.js #9 - Como editar registro no banco de dados MySQL com Node

No WorkBench para ver as modificações quando o sistema ja esta aberto,  clica no ícone que parece um raio com o simbolo do cursor em cima. Tem o mesmo efeito do atualizar do phpmyadmin.


* Node.js #10 - Como apagar registro no banco de dados MySQL com Node

Lembrando que nao estou apagando a informação do insert e agora nem do update.

Outra situação, no Nosso sistema nao iremos excluir, iremos fazer update para a Situacao 'E' como é no simplesweb. 


* Node.js #11 - Como instalar e usar o Sequelize no Node.js

Agora com o Sequelize, iremos criar a tabela clientes. 

	https://www.npmjs.com/package/sequelize

	
Instalar o Sequelize
#### npm install --save sequelize

Instalar qual o banco de Dados que iremos usar:
#### npm install --save mysql2


Getting started

	https://sequelize.org/master/manual/getting-started.html


Depois de conectado com sucesso, vamos para criar uma tabela 
Modeling a table


As tabelas criadas pelo Sequelize,  já tem um id, criado automaticamente e que já é chave primaria 
e ja vem  com 'createdAt' e 'updatedAt' ambos referente a data de criação e data de modificação. 





node app.js 
Conexao realizada com sucesso. 


Primeira informação adicionada no banco de dados com o Sequelize
![image](https://user-images.githubusercontent.com/1613816/151711139-848c5fe5-0a63-41a7-a016-ae437f261d6a.png)



Inserindo dados na tabela 

User.create({ nome_do_campo: 'conteudo_do_campo', nome_do_campo_N: 'conteudo_do_campo_N', });

Pode adicionar apenas os campos que tem Conteudo os restantes pode deixar sem. 

* Node.js #12 - Como instalar o Handlebars no Node e criar o layout padrão para o projeto

	https://handlebarsjs.com/

#### npm install --save handlebars 

handlebars exclusivo para express
#### npm install --save express-handlebars


Configurar o  'app.js' com apenas as informações para usar o Handlebars

criar a pasta 'views'
Dentro da pasta 'views' , criar a pasta 'layout' e dentro da pasta ' layout' criar o arquivo  'main.handlebars'

No arquivo 'main.handlebars' criar as configurações de uma página html.

Dentro do Body adicionar `{{{body}}}`

Incluir no arquivo 'app.js' o arquivo criado;

## Erro na apresentacao 

Tentativa de arrumar fora do site do Celke:

	https://stackabuse.com/guide-to-handlebars-templating-engine-for-node/

#### npm install --save express express-handlebars

No lugar de ser exensao 'handlebars' usar 'hbs' fica menor;

.
├── app.js
└── views
    ├── home.hbs
    └── layouts
        └── main.hbs
	
Seguindo este site tivemos o mesmo resultado.

O que deu certo, foi utilizar o arquivo 'app.js' desta forma:
<pre>
const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(3000);

</pre>

Estas informações encontrei neste site:

	https://stackoverflow.com/questions/69962757/typeerror-handlebars-is-not-a-function





# Retornando

Depois de ver outros sites e tutorias e achar uma forma diferente de fazer o Handlebars  funcionar.

Estamos testando a primeira página:
`localhost:8080/pagamento`

Pagina mostrando a mensagem como indicado.


## Criando paginas com Estilo

Dentro da pasta view,  iremos criar o arquivo 'pagamento.handlebars'

Será criado apenas o corpo da pagina, nem um cabeçalho do html. Apenas o conteudo do body.
Na página 'main.handlebars' iremos adicionar os estilos e o Footer para testarmos se esta adicionado as informações de uma página na outra.

![image](https://user-images.githubusercontent.com/1613816/152446445-8b4a2a69-22ae-477d-928b-12eb3d04735b.png)

Mas a página Usuarios,  do projeto Original ainda sem respostas positivas.



* Node.js #13 - Como criar o formulário com Node e salvar no banco de dados

Formularios com os dados sendo adicionado no banco de dados 

    https://www.npmjs.com/package/body-parser

#### `npm install --save body-parser`


# Atenção

Para recriar este projeto em outro pc, pelo o que o Celke informou  basta ter o projeto e package.json
No novo pc, depois de baixado  o projeto se usaria o comando

#### `npm update`

Com isto seria reinstalado o projeto com as dependências existentes no package.json

Testar amanhã no outro pc.
===========================

Dentro do arquivo app.js iremos criar o 'app.post' que irá receber as informações do formulário que consta na página html.

<pre>
app.post('/add-pagamento', function(req, res ){
   res.send("Nome: " + req.body.nome + "<br>Valor: "+ req.body.valor + "<br>" );
});
</pre>

Iremos rodar a página do Formulário dos Pagamentos ( http://localhost:8080/cad-pagamento ) digitaremos as informações e quando clicar no botão 'Cadastrar' o sistema reencaminhará para a página de lista de pagamentos ( http://localhost:8080/add-pagamento ) mostrando a informação recebida. 

Página do Formulário
![image](https://user-images.githubusercontent.com/1613816/152462402-fc911091-6f2c-4d02-9d45-2d97bd947f26.png)


Página com as Informações Recebidas do Formulário:
![image](https://user-images.githubusercontent.com/1613816/152462467-ab3f2edc-7c03-4a43-ad96-8a8fe2ae45f3.png)



Será criada a pasta 'models' e dentro dela o arquivo `db.js` que será o encarregado por fazer a conexao com o banco de Dados. 

Forma para exportar a conexao com o banco:

	module.exports = {
    		Sequelize: Sequelize,
    		sequelize: sequelize
	}
	


modules -> Pagamento.js

Na mesma pasta 'models' será criado o arquivo `Pagamento.js`;
Que ira reescrever o Codigo com a criação da Tabela e colunas já realziada anteriormente.

Comentamos a linha de criar a tabela, para ela  não ser recriada a todo o momento;

Deixamos a pagina como exportável 

`module.exports = Pagamento;`


Voltamos para o arquivo 'app.js' onde iremos trabalhar com a pagina 'Pagamento.js'
na rota 'app.post'. Antes incluir o moulo Pagamento;
const pagamento = require("./models/Pagamento");


Adicionouo no banco de dados!!
Agora redirecionar para a pagina de listar os pagamentos 


* Node.js #14 - Como listar registros do banco de dados com Node.js

Listar Pagamentos é o arquivo 'pagamento.handlebars' que esta dentro da pasta views;

Documentação da Sequelize
findAll()

Erro ao listas as informações do Banco de Dados:


Handlebars: Access has been denied to resolve the property "nome" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
Handlebars: Access has been denied to resolve the property "valor" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
Handlebars: Access has been denied to resolve the property "createdAt" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:371:5)
    at ServerResponse.setHeader (node:_http_outgoing:576:11)
    at ServerResponse.header (D:\projetos\Celke\mysql-node-javascript\node_modules\express\lib\response.js:776:10)
    at ServerResponse.send (D:\projetos\Celke\mysql-node-javascript\node_modules\express\lib\response.js:170:12)
    at done (D:\projetos\Celke\mysql-node-javascript\node_modules\express\lib\response.js:1013:10)
    at ExpressHandlebars.<anonymous> (D:\projetos\Celke\mysql-node-javascript\node_modules\express-handlebars\dist\express-handlebars.js:301:25)
    at step (D:\projetos\Celke\mysql-node-javascript\node_modules\express-handlebars\dist\express-handlebars.js:49:23)
    at Object.next (D:\projetos\Celke\mysql-node-javascript\node_modules\express-handlebars\dist\express-handlebars.js:30:53)
    at fulfilled (D:\projetos\Celke\mysql-node-javascript\node_modules\express-handlebars\dist\express-handlebars.js:21:58)






Site com uma opção de ajuda:

	http://www.prowebguru.com/2020/08/nodejs-express-handlebars-access-denied-resolve-property-solution/#.Yf-58Juencd


Como ficou no meu Código:
<pre>	  
app.engine('handlebars', engine({
    defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }

}));
app.set('view engine', 'handlebars');
app.set("views", "./views");
</pre>

Apresentação na tela:

![image](https://user-images.githubusercontent.com/1613816/152681439-62c17693-c668-41ac-beda-b3bc1e54c714.png)

Como esta no Bnaco de Dados:

![image](https://user-images.githubusercontent.com/1613816/152681513-f322c7ab-b315-46ec-946c-35996bf65bd2.png)

Para o formato da Data, iremos trabalhar com o `moment`

	#### `npm install --save moment`

Esta nova extensão será chamada no arquivo principal 'app.js';

Agora acrescentando o Helpers no Handlebars 

<pre>
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
</pre>


A lista com os pagamentos, não esta indo direto, quando fazemos a rota para adicionar um novo registro no banco
Fica aparecendo  que o sistema não consegue ler o que já tem no banco, quando pega esta rota. 
Repeti o Código de pagamento  no Cadastro também, e agora estão aparecendo os pagamentos registrados. 

Ordenando as informações, usando a Documentação do Sequelize para a ordenação.

* Node.js #15 - Como apagar registro do banco de dados com Node.js





	  


	











