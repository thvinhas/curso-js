var sum = function calculateSum(x, y) {
	return x + y;
};

console.log('A soma de 2 e 3 é igual a ' + sum(2, 3));

console.log('O nome da função que faz a soma é ' + sum.name);

function showName() {
	return 'Thiago';
}

var varShowName = showName;

console.log('a função ' + varShowName.name + ' retorna ' + varShowName());


function calculator(operator) {

	return function(x, y) {
		var soma;
		switch (operator) {
			case '+':
				soma = x + y;
				break;
			case '-':
				soma = x - y;
				break;
			case '*':
				soma = x * y;
				break;
			case '/':
				soma = x / y;
				break;
			case '%':
				soma = x % y;
				break;
			default:
				return "Operaçao invalida";
				break;
		}
		return "Resultado da operação: " + x + " " + operator + " " + y + " = " + soma;
	}
}

var sum  = calculator('+');

console.log(sum(3,2));

var subtraction  = calculator('-');

console.log(subtraction(3,2));

var multiplication  = calculator('*');

console.log(multiplication(3,2));

var division  = calculator('/');

console.log(division(3,2));

var mod  = calculator('%');

console.log(mod(3,2));
