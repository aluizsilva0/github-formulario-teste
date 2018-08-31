# github-formulario-teste
 1- Criar o banco de dados executando os comandos SQL. Os comandos se encontram no arquivo banco_de_dados.sql. Assim será criado o banco de dados chamado formularioteste;
 
 2- Colocar a pasta do programa no servidor local. se a pasta do projeto tiver o nome formularioteste o caminho da url será: C:/wamp/www/formularioteste; (caso seja usado o wampserver);
 
 3- Após a criação do banco de dados e a inserção da pasta do programa no servidor local, o próximo passo é abrir o navegador e acessar o caminho do sistema (URL).
 Ex: localhost/www/nome da pasta que está no servidor;
 
# Acessar o sistema
 4- Após acessar o caminho acima, será aberta a página principal do formulário (index.html);
 
 5-Preencher o formulário e enviar os dados.
 
 6-Após o envio, os dados serão armazenados no banco de dados formularioteste na tabela usuários;
 
# Consultar o banco de dados
 7- Abrir promptde comando(CMD), acessar do projeto que se encontra no servidor local.
 
 8- ao acessar a pasta do projeto executar o script 
 
 
 Após iniciar o servidor nodejs abrir o navegador e acessar a url: localhost:3000/usuarios/e aqui digitar um ID qualquer.
 Exemplo se existe um usuário com id = 3 no banco de dados, a url de consulta fica: localhost:3000/usuarios/3.

# OBS SOBRE O PROJETO
 A pasta controller contém o arquivo conexao.php que possui as configurações do banco de dados(caminho, usuário e senha, nome do banco)
 possui também o arquivo cadastrar-dados-bd-php que realiza a inserção do dados no banco de dados.
 A pasta css é para estilizar o formulário
 O diretório JS contém o formulário.js => Jquery que pega os dados do form html e passar para o arquivo de cadastro do PHP.
