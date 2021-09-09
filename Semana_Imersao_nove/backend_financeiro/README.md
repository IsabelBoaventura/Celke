Neste arquivo deve conter todos os comandos que forem usados no decorrer do curso.

Sequência para criar o projeto
Criar o arquivo package
### `npm init`

Instalar dependência para gerenciar requisições, rotas, url, entre outras
Pesquise por este endereço: https://www.npmjs.com/package/express

E para instalar ( já esta definido no site como fazer), usar  o comando
### `npm  install express`

Cria o arquivo package-lock.json onde terá várias dependencias que a Dependência express irá necessitar,  várias versões da biblioteca instalada. 

Todos estes arquivos estão dentro da pasta 'node_modules' que também foi criado com o install do npm express.

Agora para usor, teremos de criar arquivo 'app.js' na raiz do projeto. E conforme a documentação orienta, faz a exportação da Dependência. 


Para rodar nosso projeto, no terminal digite:
### `node app.js`

No navegador o projeto irá abrir em:  http://localhost:8080/listar

Instalar o Módulo para reiniciar o servidor sempre que houver alterações no Código fonte, *g* significa globalmente
### `npm install -g nodemon`

Agora para iniciar o projeto:
### `nodemon app.js`


Dependencia para fazer a união do banco de Dados com o nosso sistema 
### `npm install --save sequelize`

Acrescentar a Dependencia do Banco de Dados
### `npm install --save mysql2`





