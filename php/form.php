<?php

	if(isset($_POST['action'])){ // isset =  determina se a variavel foi declarada e se é diferente de null 

		$fp = fopen('data.bin','a');

		$primero_nome=$_POST['primeiro'];
		$ultimo_nome=$_POST['segundo'];
		$satisfacao=$_POST['satisfacao'];
		$mensagem=$_POST['mensagem'];

		
		fwrite($fp,$primero_nome);
		fwrite($fp,$ultimo_nome);
		fwrite($fp,$satisfacao);
		fwrite($fp,$mensagem);
		fclose($fp);
	}

?>