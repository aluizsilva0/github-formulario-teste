//formulario js

$('#form1').submit(function(e){
	e.preventDefault();

	if($('#enviar').val() == 'Enviando...'){
		return (false);
	}

	$('#enviar').val('Enviando...');

	$.ajax({
		url:'controller/cadastrar-dados-bd.php',
		type: 'post',
		dataType: 'html',
		data: {
			'metodo': $('#metodo').val(),
			'nome': $('#nome').val(),
			'email': $('#email').val(),
			'cpf': $('#cpf').val(),
			'data': $('#data').val()
		}
	}).done(function(data){
		alert(data);

		$('#enviar').val('Enviar');
		$('#metodo').val('');
		$('#nome').val('');
		$('#email').val('');
		$('#cpf').val('');
		$('#data').val('');		

		window.location.reload();//Atualiza a página

	});

});


