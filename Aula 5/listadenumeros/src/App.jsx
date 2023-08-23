//Crie um componente ListaNumeros que recebe uma lista de números como prop. Renderize apenas os números pares em elementos <li>. Teste com um vetor de números preenchidos aleatoriamente.

import './App.css'
import ListaNumeros from './componentes/ListaNumeros';

function App() {

	const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className="card">
       <span>Lista de numeros</span>
		<ListaNumeros lista={numeros}></ListaNumeros>
      </div>
    </>
  )
}

export default App
