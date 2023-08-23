//Crie um componente Relogio que exiba um relógio digital que atualiza a hora a cada segundo. Use o estado para armazenar a hora atual. (Utilize a função setInterval do javascript)

import './App.css'
import Relogio from './components/Relogio'

function App() {

  return (
    <>
		<div className="card">
		<Relogio></Relogio>
		</div>
	</>
	)
}

export default App