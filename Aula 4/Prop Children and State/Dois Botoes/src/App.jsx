/*
Faça uma tela com dois botões e um valor numérico. Quando clicado no primeiro botão, o número deverá diminuir em 1 o valor, quando clicado no segundo botão, o número deverá aumentar em 1 o valor.
*/

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	<h1>{count}</h1>
    <button onClick={() => setCount((count) => count - 1)}>Diminuir</button>
	<button onClick={() => setCount((count) => count + 1)}>Aumentar</button>
    </>
  )
}

export default App
