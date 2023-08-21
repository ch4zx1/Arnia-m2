import Custominput from "./components/forms/CustomInput"

function App() {

  return (
    <div style={{display: "flex", flexDirection: "column", gap: 10, width: 400}}>
		<Custominput type="text" id="email">Email:</Custominput>
		<Custominput type="password" id="password">Senha:</Custominput>
		<button>Logar</button>
    </div>
  )
}

export default App
