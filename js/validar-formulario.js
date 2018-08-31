//CÓDIGO JAVASCRIPT PARA VALIDAR OS CAMPOS DO FORMULÁRIO
		var qtdCaracter;
		//FUNÇÃO PARA VALIDAR O CAMPO NOME DO FORMULÁRIO
		function validarNome() {
			var nome = form1.nome.value;
			if (nome != "") {//VERIFICA SE O CAMPO NOME ESTÁ VAZIO
				if(nome.length < 5){
					document.getElementById('msg').innerHTML = 'Erro: Campo Nome Inválido!';	
					form1.nome.focus();
				}
				else{
					document.getElementById('msg').innerHTML = '*Campos Obrigatórios';			
				}
			}			
		}	
		//FUNÇÃO PARA VALIDAR O CAMPO DE E-MAIL
		function validarEmail(){
			var email = form1.email.value;//variável e-mail recebe a variável do campo e-mail 
			var posicao = email.indexOf("@"); // variável posição recebe a posição que se encontra o caracter @
			var ultimocaracter = email.charAt(email.length-1);// variável ultimo caracter recebe o ultimo caracter do e-mail
			
			if (email !="") {
				//CHAMANDO A FUNÇÃO QUE VERIFICA A QUANTIDADE DE OCORENCIAS DO CARACTER @ EM UMA STRING(CAMPO EMAIL)
				verificaCaracters();
				if(email.indexOf("@") >= 0){//Verificando se existe o caracter @ no email
					if (posicao >=1 & ultimocaracter != "@") {//verificando se o @ não é o ultimo caracter
						if (qtdCaracter == 1) { //verificando a quantidade de vezes que o caracter @ apareceu no campo de email
							document.getElementById('msg').innerHTML = 'Aviso: Campos Obrigatórios *';//Apresenta a mensagem padrão
						}else{
							document.getElementById('msg').innerHTML = 'Erro: Campo E-mail Inválido!';//Apresenta mensagem de erro no preenchimento do formulário
							form1.email.focus();
						}						
					}else{
						document.getElementById('msg').innerHTML = 'Erro: Campo E-mail Inválido!';
						form1.email.focus();
					}
				} else{
					document.getElementById('msg').innerHTML = 'Erro: Campo E-mail Inválido!';
					form1.email.focus();
				}
			}	
		}
		//FUNÇÃO PARA VALIDAR O CPF
		function validarCpf(){
			//CHAMANDO A FUNÇÃO QUE COLOCAR MARCARA NO NO FORMULÁRIO.			
			MascaraCpf();
		}
		//FUNÇÃO PARA INSERIR MÁSCARA NO CPF
		function MascaraCpf(){
			var cpf = form1.cpf.value;
			if (cpf !="") {
				if (cpf.length == 3 || cpf.length == 7) {
					document.getElementById('cpf').value = cpf+'.';
				}
				if (cpf.length == 11) {
					document.getElementById('cpf').value = cpf+'-';
				}
			}	
		}
		//FUNÇAO PARA QUE O CAMPO CPF SO ACEITE NÚMEROS.
		function SomenteNumero(e){
      		var tecla=(window.event)?event.keyCode:e.which;
      		if((tecla > 47 && tecla < 58)) 
      			return true;
      		else{
      		if (tecla != 8) 
      			return false;
      		else 
      			return true;
      		}
      	}
      	//VERIFICA SE A QUANTIDADE DE NÚMEROS INFORMADOS NO CPF ESTÁ CORRETO
      	function verificaCpf(){
      		var cpf = form1.cpf.value;
      		if (cpf !="") {
				if(cpf.length < 14){
					document.getElementById('msg').innerHTML = 'Erro: CPF Inválido!';
					form1.cpf.focus();	
				}else{
					document.getElementById('msg').innerHTML = 'Aviso: Campos Obrigatórios *';	
				}
			}	
      	}
		//FUNÇÃO PARA VERIFICA A QUANTIDADE DE OCORRENCIA DE UM CARACTER EM UMA STRING (NESSE CASO O CARACTER @)
		function verificaCaracters(){
			var enderecoEmail = form1.email.value;
			var qtd = 0;
			for (var i = 0; i < enderecoEmail.length; i++) {
				if (enderecoEmail[i] == "@") {
					qtd = qtd + 1;
				}
			}
			qtdCaracter = qtd;
		}
