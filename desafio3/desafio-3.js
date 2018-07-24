var pessoa =  {
	nome : 'Thiago',
	sobrenome : 'Vinhas',
	sexo: 'Masculino',
	idade : 23,
	altura: 1.71,
	peso: 70,
	andando: false,
	caminhouQuantosMetros: 0

}

pessoa.fazerAniversario = function() {
	pessoa.idade++;
}

pessoa.andar = function (metrosCaminhados) {
	pessoa.caminhouQuantosMetros += metrosCaminhados;
	pessoa.andando = true;
}

pessoa.parar = function() {
	pessoa.andando = false;
}

pessoa.nomeCompleto = function() {
	return "Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome +"!"; 
}

pessoa.mostrarIdade = function() {
	return "Olá, eu tenho " + pessoa.idade +" anos!"
}
pessoa.mostrarPeso = function() {
	return "Eu peso " + pessoa.peso +"kg."
}

pessoa.mostrarAltura = function() {
	return "Minha altura é " + pessoa.altura + "m."
}

pessoa.apresentacao = function() {
	
	if (pessoa.sexo == 'feminino') {
		var sexo = "eu sou a ";
	} else {
		var sexo =  "eu sou o ";
	}

	if (pessoa.idade == 1) {
		var idade =  "ano";
	} else {
		var idade = "anos"
	}

	if(pessoa.caminhouQuantosMetros == 1) {
		var metros = 'metro';
	} else {
		var metros = 'metros';
	}

	return `Olá, ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idade}, ${pessoa.altura}, meu peso é ${pessoa.peso}, e só hoje eu já caminhei ${pessoa.caminhouQuantosMetros} ${metros}`

}