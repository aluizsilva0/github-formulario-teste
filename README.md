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
 7- Copiar arquivo de consulta do banco de dados consultabanco.js para dentro do servidor node js

 8- Abrir prompt de comando(CMD), acessar do projeto que se encontra no servidor do node e executar o comando node consultaBanco.js para executar o script.
 
 9- Ao executar o scipt abrir o navegador e acessar a url: localhost:3000/usuarios/id 
 # OBS: 
        ao acessar a url após /usuarios o campo id deve ser passado como um parametro ou seja um numero de id que está cadastrado no banco de dados, caso contrário a consulta não retornará nenhum cadastro.

# OBSERVAÇÕES SOBRE O PROJETO
 A pasta controller contém o arquivo conexao.php que possui as configurações do banco de dados(caminho, usuário e senha, nome do banco)
 possui também o arquivo cadastrar-dados-bd-php que realiza a inserção do dados no banco de dados.
 
 A pasta css é para estilizar o formulário
 
 O diretório JS contém o formulário.js => Jquery que pega os dados do form html e passar para o arquivo de cadastro do PHP.
