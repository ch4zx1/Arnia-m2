/* eslint-disable react/prop-types */
import { useContext } from 'react'
import CardEscolhidos from './CardEscolhidos/CardEscolhidos'
import * as S from './styles'
import { ContadorContext } from '../../../context/CreateContext'

function BodyCheckout()
{
	const [contador] = useContext(ContadorContext)

	return(
		<S.Body>
		<S.ContainerTop>
		<h1>Checkout</h1>
		</S.ContainerTop>
		<S.ContainerContent>
			<span>Produtos Escolhidos:</span>
			<S.ContainerImg>
				<CardEscolhidos></CardEscolhidos>
			</S.ContainerImg>
			<span>Total produtos: {contador}</span>
			<span>Total: R${contador * 10},00</span>
		</S.ContainerContent>
		<S.ContainerButton>
			<button onClick={() => {window.location.href = './'}}>Confirmar Compra</button>
		</S.ContainerButton>
		</S.Body>
	)
}

export default BodyCheckout