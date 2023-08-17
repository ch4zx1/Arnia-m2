/* eslint-disable react/prop-types */
import { useContext } from 'react';
import CardSelecionados from './CardSelecionados/CardSelecionados';
import * as S from './styles'
import { ContadorContext } from '../../../context/CreateContext';
import { useNavigate } from 'react-router-dom';

function BodyCarrinho()
{
	const [contador] = useContext(ContadorContext);
	const navigate = useNavigate();

	return(
		<S.Body>
		<S.ContainerTop>
		<h1>Carrinho</h1>
		<S.ContainerContador>
			<span>{contador}</span>
		</S.ContainerContador>
		</S.ContainerTop>
		<S.ContainerProdutos>
			<CardSelecionados></CardSelecionados>
		</S.ContainerProdutos>
		<S.ContainerBottom>
			<span>Total: R$ {contador * 10},00</span>
			<button onClick={() => {navigate("../checkout")}}>Finalizar Compra</button>
		</S.ContainerBottom>

		</S.Body>
	)
}

export default BodyCarrinho