import { useState } from 'react'
import './App.css'

function App() {

	const [imagem, setImagem] = useState(["https://www.bairesdev.com/wp-content/uploads/2022/06/Picture6-1.svg",
	"https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png",
	"https://vitejs.dev/logo-with-shadow.png"
	])
	const [valor, setValor] = useState(0)

  return (
    <>
    <div className="card">
	<h1>{valor}</h1>
	<img src={imagem[valor]}></img>
	<button onClick={() => setValor(valor < imagem.length - 1 ? (valor + 1) : valor)}>+</button>
	<button onClick={() => setValor(valor <= 0 ? valor : valor - 1)}>-</button>
    </div>
    </>
  )
}

export default App
