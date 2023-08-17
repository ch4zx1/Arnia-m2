/* eslint-disable no-undef */
import * as S from './styles';
import HeaderApp from '../../componentes/header/Header'
import BodyProdutos from '../../componentes/body/Produtos/Body'
import FooterApp from '../../componentes/footer/Footer'

function Produtos() {

	return (
		<S.Body>
		<HeaderApp></HeaderApp>
		<BodyProdutos></BodyProdutos>
		<FooterApp></FooterApp>
		</S.Body>
	)
}

export default Produtos
