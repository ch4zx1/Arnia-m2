import * as S from './styles'
import produtos from '../../../../api/products.json'
import CustomButton from '../CustomButton/CustomButton';

function CardGame() {

	return produtos.map((produto) => (
	<div key={produto.id}>
		<S.Body>
		<img src={produto.image} alt={produto.name} />
		<S.ContainerBottom>
			<CustomButton id={produto.id}></CustomButton>
			<span>Valor: R${produto.value},00</span>
		</S.ContainerBottom>
		</S.Body>
	</div>
	));
  }

export default CardGame