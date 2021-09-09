Neste arquivo deve conter todos os comandos que forem usados no decorrer do curso.

Sequ�ncia para criar o projeto
Criar o arquivo package
### `npm init`

Instalar depend�ncia para gerenciar requisi��es, rotas, url, entre outras
Pesquise por este endere�o: https://www.npmjs.com/package/express

E para instalar ( j� esta definido no site como fazer), usar  o comando
### `npm  install express`

Cria o arquivo package-lock.json onde ter� v�rias dependencias que a Depend�ncia express ir� necessitar,  v�rias vers�es da biblioteca instalada. 

Todos estes arquivos est�o dentro da pasta 'node_modules' que tamb�m foi criado com o install do npm express.

Agora para usor, teremos de criar arquivo 'app.js' na raiz do projeto. E conforme a documenta��o orienta, faz a exporta��o da Depend�ncia. 


Para rodar nosso projeto, no terminal digite:
### `node app.js`

No navegador o projeto ir� abrir em:  http://localhost:8080/listar

Instalar o M�dulo para reiniciar o servidor sempre que houver altera��es no C�digo fonte, *g* significa globalmente
### `npm install -g nodemon`

Agora para iniciar o projeto:
### `nodemon app.js`


Dependencia para fazer a uni�o do banco de Dados com o nosso sistema 
### `npm install --save sequelize`

Acrescentar a Dependencia do Banco de Dados
### `npm install --save mysql2`





