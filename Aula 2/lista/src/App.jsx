function App() {

	const lista = [
	{
		description: 'Escovar os dentes',
		isDone: true
	},
	{
		description: 'Assistir à aula',
		isDone: false
	}
	
	]
	
	return (
	<>
		<h1>Lista de afazeres</h1>
		<ol>
		{lista.map((item, index) => 
		<div key={index} style={{display: "flex", flexDirection: "row"}}>
		{item.isDone ? (<li>{item.description}</li>) : (<s><li>{item.description}</li></s>)}
		<input type="checkbox" defaultChecked={item.isDone === !true} id={index}></input>
		</div>)}
		</ol>
	</>
	)
}
export default App
