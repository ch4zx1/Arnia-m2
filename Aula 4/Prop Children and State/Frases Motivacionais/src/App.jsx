/*
Crie um gerador de frases motivacionais. A sua tela deverá mostrar uma frase e ter um botão para gerar outra. Quando clicado, o botão deverá atualizar o estado e modificar a frase para uma aleatória.

Utilize esta função para obter o número aleatório: 
function randomIntFromInterval(min, max) { 
return Math.floor(Math.random() * (max - min + 1) + min) 

*/

import {useState} from "react";
import "./app.css"

const frases = [
"Clique para gerar a frase!",
"A palavra “impossível” foi inventada para ser desafiada.",
 "Somos capazes de fazer muito mais do que imaginamos!",
 "Nós somos como o clima: feitos de dias de chuva e de sol!",
 "Há ainda tanta coisa linda na vida para se descobrir.",
 "Que todos os nossos passos nos levem para o que nos faz feliz de verdade.",
 "Abra os olhos e aventure-se nessa jornada chamada vida!"]

function randomIntFromInterval(min, max)
{ 
	return Math.floor(Math.random() * (max - min + 1) + min) 
}

function App() 
{
	const [isNumber, setIsNumber] = useState(0)

	return (
		<div className="all">
		<p>{frases[isNumber]}</p>
		<button onClick={() => setIsNumber(randomIntFromInterval(1,6))}>Gerar frase</button>
		</div>
		)
}

export default App