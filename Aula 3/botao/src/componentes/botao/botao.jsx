function Botao({ text })
{
	return(
		<>
		<button onClick={() => alert(text)}>{ text }</button>
		</>
	)
}

export default Botao