/* eslint-disable react/prop-types */
import * as S from './styles'
import CardGame from './CardGame/CardGame';
import { useContext } from 'react';
import { ContadorContext, SalvarJogos } from '../../../context/CreateContext';
import { useNavigate } from "react-router-dom";

function BodyProdutos()
{	
	const [contador, setContador] = useContext(ContadorContext);
	const [jogos] = useContext(SalvarJogos)
	const navigate = useNavigate();
	
	return(
		<S.Body>
		<S.ContainerTop>
		<h1>Produtos</h1>
		<S.ContainerContador>
			{setContador(jogos.length)}
			<span>{contador}</span>
		</S.ContainerContador>
		</S.ContainerTop>
		<S.ContainerGames>
			<CardGame></CardGame>
		</S.ContainerGames>
		<S.ContainerButton>
		<button onClick={() => {navigate("./carrinho")}}>Ir para o carrinho</button>
		</S.ContainerButton>
		</S.Body>
	)
}

export default BodyProdutos