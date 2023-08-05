import { useState } from "react";

function Titulo()
{
	const [texto, setTexto] = useState("texto inicial");
	const [inputText, setInputText] = useState("");

	function clicou()
	{
		setTexto(inputText);
	}

	return (
	<div>
		<h1>{texto}</h1>
		<input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
		<button onClick={clicou}>Click</button> 
	</div>
	)

}
export default Titulo