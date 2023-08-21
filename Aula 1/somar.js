//Escreva uma função chamada somarValores que recebe um array de números e retorna a soma de todos os valores do array utilizando a função reduce.

const array = [1, 2, 3, 4, 5];

function soma(numeros){
	return numeros.reduce((acumulador, numero) => acumulador + numero, 0)
}

console.log(soma(array))