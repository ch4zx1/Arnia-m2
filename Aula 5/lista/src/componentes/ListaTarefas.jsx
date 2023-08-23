import { useState } from "react";

function ListaTarefas({itens}){

	const [lista, setLista] = useState(itens)

	function handlestate(index)
	{
		const tempLista = [...lista]
		tempLista[index].concluida = !tempLista[index].concluida
		setLista(tempLista)
	}

	function removeitem(id)
	{
		const newLista = lista.filter((item) => item.id !== id);
		setLista(newLista);
	}

	return(
	<>
	<ul className="list-group">
		{
		lista.map((item, index) =>
			<>
			<li key={item.id} onClick={() => handlestate(index)}>{item.texto}: {item.concluida ? "Feito" : "Marcar como feito"}</li>
			<button onClick={() => removeitem(item.id)}>Excluir</button> 
			</>
		)
	}
		</ul>
	</>
)
}

export default ListaTarefas