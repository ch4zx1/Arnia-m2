import { useState } from 'react'
import Lista from './components/ListaC'
import * as S from './styles'

const ListaDeItems = ["1 - Shampoo", "2 - Condicionar", "3 - Pasta de dente", "4 - Sabonete", "5 - Fio dental", "6 - Desodorante"]

type order = 'asc' | 'dsc'

function App() {

	const [type, setType] = useState<order>('asc')

  return (
    <div>
	<S.Body>
		<Lista array={ListaDeItems} type={type}></Lista>
		<S.ContainerButton>
		<button onClick={() => type == 'asc' ? (setType('dsc')) : (setType('asc'))}>{type === 'asc' ? "Decrescente" : "Crescente"}</button>
		</S.ContainerButton>
	</S.Body>
    </div>
  )
}

export default App
