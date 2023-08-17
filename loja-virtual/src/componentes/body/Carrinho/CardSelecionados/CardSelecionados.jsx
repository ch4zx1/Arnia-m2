import produtos from '../../../../api/products.json'
import { SalvarJogos } from '../../../../context/CreateContext'
import ButtonQ from './ButtonQ/ButtonQ'
import * as S from './styles'
import { useContext } from 'react'

function CardSelecionados()
{
	const [jogos] = useContext(SalvarJogos)
	const json = JSON.stringify(jogos)
	const filtrar = produtos.filter((jogo) => json.includes(jogo.id))

	return(
		<>
			{filtrar.map((jogo) => {
				return (
					<div key={jogo.id}>
						<S.ContainerCard>
						<img src={jogo.image}></img>
						<S.ContainerInfo>
						<h1>{jogo.name}</h1>
						<span>Valor: R${jogo.value},00</span>
						<ButtonQ></ButtonQ>
						</S.ContainerInfo>
						</S.ContainerCard>
					</div>
				)
			})}
		</>
	)
}

export default CardSelecionados