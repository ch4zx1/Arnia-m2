import { useContext, useState } from 'react';
import { ContadorContext } from '../../../../../context/CreateContext'
import * as S from './styles'

function ButtonQ()
{
	
	const [quantidade, setQuantidade] = useState(1);
	const [contador, setContador] = useContext(ContadorContext)
	const [backupcontador] = useState(contador);

	return (
		<>
		<span>Quantidade: {quantidade}</span>
		<S.ContainerButton>				
		<button onClick={() => {setContador(contador + 1), setQuantidade(quantidade + 1)}}>+</button>
		<button onClick={() => {contador > backupcontador ? setContador(contador - 1) : null, quantidade > 1 ? setQuantidade(quantidade - 1) : null}}>-</button>
		</S.ContainerButton>
		</>
	)
}

export default ButtonQ