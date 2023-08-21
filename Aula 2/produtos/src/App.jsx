function App() {

	const produtos = [
	{
		name: "Detergente",
		stock: 23,
		price: 3.4,
	},
	{
		name: "Veja Limpeza Pesada",
		stock: 0,
		price: 5.4,
	},
	{
		name: "Shampoo",
		stock: 15,
		price: 8.99,
	},
	{
		name: "Pasta de Dentes",
		stock: 10,
		price: 2.49,
	},
	{
		name: "Toalhas de Papel",
		stock: 30,
		price: 1.99,
	},
	{
		name: "Lâmpada LED",
		stock: 8,
		price: 12.99,
	},
	{
		name: "Cereal Matinal",
		stock: 5,
		price: 4.75,
	},
	{
		name: "Fraldas",
		stock: 0,
		price: 15.25,
	},
	{
		name: "Caderno",
		stock: 20,
		price: 7.99,
	},
	{
		name: "Caneta",
		stock: 50,
		price: 0.99,
	},
	{
		name: "Café em Pó",
		stock: 12,
		price: 6.49,
	},
	{
		name: "Manteiga",
		stock: 3,
		price: 2.75,
	},
	{
		name: "Pão de Forma",
		stock: 8,
		price: 1.89,
	},
	{
		name: "Leite",
		stock: 7,
		price: 3.25,
	},
	{
		name: "Biscoitos",
		stock: 18,
		price: 2.15,
	},
	{
		name: "Sabonete",
		stock: 25,
		price: 1.49,
	},
	{
		name: "Desodorante",
		stock: 10,
		price: 4.99,
	},
	{
		name: "Champô para Cabelo",
		stock: 15,
		price: 6.75,
	},
	{
		name: "Condicionador",
		stock: 14,
		price: 7.25,
	},
	{
		name: "Papel Higiênico",
		stock: 6,
		price: 3.99,
	},
	{
		name: "Água Mineral",
		stock: 20,
		price: 0.75,
	},
	];

  return (
    <>
    <h1>Lista de produtos</h1>
	<ol>
	{produtos.map((item, index) =>
			<div key={index}>
				<li>{item.name}</li>
				{item.stock > 0 ? <><button>Adicionar ao carrinho</button><span>Preço: {item.price}</span></> : <span>Item não disponivel</span>}
			</div>
	)}
	</ol>
    </>
  )
}

export default App
