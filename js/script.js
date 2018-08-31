var express = require('express');
var mysql = require('mysql');
var app = express();

var connect = mysql.createConnectioin({
	//properties
	host: 'localhost',//local do banco de dados
	user: 'root',//Usuário para acessar o banco de dados
	password: '',//senha de usuário
	database: 'formularioteste'//nome do banco de dados
});

//MÉTODO PARA CONECTAR COM O BANCO DE DADOS
connection.connect(function(error){
	if (!!error) {
		console.log('Erro ao conectar ao banco de dados');
	}else{
		console.log('Connectado');
	}
});

//MÉTODO PARA REALIZAR PESQUISA NO BANCO DE DADOS
app.get('/', function(req,resp){
	//about mysql
	connection.query("SELECT * FROM formularioteste",function(error, rows, fields)
		if (!!error) {
			console.log('Erro: Ocorreu um erro na query');
		}else{
			console.log('Sucesso ao pesquisar');
		}
	});
})

app.listen(1337);
