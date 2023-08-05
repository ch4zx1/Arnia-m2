import Botao from "./componentes/botao/botao"

function App() {
  return (
	<>
	<h1>Faça um componente funcional que implementa um botão, este componente deverá receber uma prop “label”, que será colocada como o texto deste botão, e mais, quando o botão é clicado, o sistema deverá exibir um alerta mostrando a label deste botão. Implemente no App.tsx três botões diferentes para testar</h1>
	<Botao text={'Texto 1'}></Botao>
	<Botao text={'Texto 2'}></Botao>
	<Botao text={'Texto 3'}></Botao>
	</>
  )
}

export default App
