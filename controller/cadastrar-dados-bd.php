<?php

//VERIFICA SE FOI PASSADO OS DADOS PELO FORMULÁRIO
if (isset($_POST["nome"]) && isset($_POST["email"]) && isset($_POST["cpf"]) && isset($_POST["data"])) {

	include_once("conexao.php");

	$nome = $_POST['nome'];
	$email = $_POST["email"];
	$cpf = $_POST["cpf"];
	$data = $_POST["data"];

	$consulta_banco_dados = "SELECT * FROM usuarios WHERE cpf = '$cpf'";
	$restultado_banco_dados = mysqli_query($conn, $consulta_banco_dados);

	$row_cnt = mysqli_num_rows($restultado_banco_dados);

	//VERIFICANDO SE JÁ EXISTE O CADASTRO NO BANCO DE DADOS
	if ($row_cnt == 0) {//Se o retorno fo 0 não existe usuário com o cpf informado cadastrado
		$dados_usuario = "INSERT INTO usuarios (nome, email, cpf, dataNascimento) VALUES ('$nome', '$email', '$cpf', '$data')";

		$inserir_banco = mysqli_query($conn, $dados_usuario);
		$html = 'Usuário cadastrado com sucesso!';
		echo $html;

	}else if($row_cnt >=1){//caso o retorno for 1 então já existe o usuário cadastrado no Banco de Dados
		$html = 'Erro: Já existe um usuário com este cpf cadastrado no banco de dados.';
		echo $html;
	}

//CASO NÃO FOI PASSADO OS DADOS PELO FORMULÁRIO REDIRECIONA PARA A PÁGINA DE CADASTRO(INDEX.PHP)
}else{
	header("location: index.html");
}

/*
if (strcasecmp('formulario-ajax', $_POST['metodo']) == 0) {

	$html = 'Nome: '.$_POST['nome'];
	$html .= "\n";
	$html .= 'Email: '.$_POST['email'];
	$html .= "\n";
	$html .= 'CPF: '.$_POST['cpf'];
	$html .= "\n";
	$html .= 'Data: '.$_POST['data'];
	$html .= "\n";
	$html .= "\n\n Obrigado pelo cadastro.";
	
	echo $html;
}
*/

?>