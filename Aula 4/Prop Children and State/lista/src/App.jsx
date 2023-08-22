/*Crie um componente que renderize uma lista de itens e permita que o usuário adicione novos itens à lista clicando em um botão.*/

import { useState } from "react"

function App()
{
	const [lista, setLista] = useState(["a", "b", "c"])
	const [novalista, setNovalista] = useState("")
	
	function additem()
	{
		setLista([...lista, novalista]);
	}

	return (
	<>
	<input type="text" value={novalista} placeholder="Insira um novo item" onChange={ (e) => setNovalista(e.target.value)}></input>
	<button onClick={additem}>Add</button>
	<ul>
		{lista.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
    </>
  )
}

export default App
	