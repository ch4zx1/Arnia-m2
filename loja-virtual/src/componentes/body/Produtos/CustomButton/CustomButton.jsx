import { useContext, useState } from "react"
import { SalvarJogos } from "../../../../context/CreateContext"

function CustomButton(id)
{
	const [cor, setCor] = useState(false)
	const [, setJogos] = useContext(SalvarJogos)

	const Addjogo = (jogo) => {
		setJogos(array => cor === false ? [...array, jogo] : array.filter((item) => item.id !== jogo.id))
	}

	return (
		<>
		<button id={id} onClick={() => {setCor(!cor); Addjogo(id)}} style={{ background: cor ? '#6950A1' : '#FFF' }}></button>
		</>
	)
}
export default CustomButton