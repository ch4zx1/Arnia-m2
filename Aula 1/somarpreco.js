//Escreva uma função chamada calcularTotal que recebe esse array de produtos e retorna o valor total da compra, somando o preço de cada produto.

const array = [
	{ id: 1, nome: 'Camiseta', preco: 29.9 },
	{ id: 2, nome: 'Calça', preco: 59.9 },
	{ id: 3, nome: 'Tênis', preco: 99.9 }
  ];

function CalcularProdutos(produtos){
	return produtos.reduce((acumulador, numero) => acumulador + numero.preco, 0)
}

console.log(CalcularProdutos(array))