/*Crie um componente que renderize uma lista de itens e permita que o usuário adicione novos itens à lista clicando em um botão.*/

const lista = ["a", "b", "c"]

function App()
{
  return (
    <>
	<ul>
		{lista.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
    </>
  )
}

export default App
