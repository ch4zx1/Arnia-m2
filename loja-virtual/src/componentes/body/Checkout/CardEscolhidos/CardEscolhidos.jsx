import { useContext } from 'react';
import produtos from '../../../../api/products.json'
import { SalvarJogos } from '../../../../context/CreateContext';

function CardEscolhidos()
{
	const [jogos] = useContext(SalvarJogos)
	const selecionados = JSON.stringify(jogos)
	const filtrar = produtos.filter(jogo => selecionados.includes(jogo.id))

	return(
		<>
		{filtrar.map((jogo) => {
			return (
				<div key={jogo.id}>
				<img src={jogo.image}></img>
				</div>
			)
		})}
		</>
	)
}

export default CardEscolhidos