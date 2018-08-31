const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//Comando para pegar os POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Executando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

//Função para criar uma conexão com o servidor
function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',//Caminho do banco de Dados
    user     : 'root',//usuário  do banco de dados
    password : '',//senha do banco de dados
    database : 'formularioteste'//nome do banco de dados
  });
 
 //função para verificar se a pesquisa foi realizada com sucesso
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('Pesquisa realizada com sucesso');
  });
}

//definindo as rotas para pegar os dados do banco de dados => nesta caso o caminho até o servidor será localhost:3000/usuarios/id
router.get('/usuarios/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM usuarios' + filter, res);
})