/* eslint-disable no-undef */
import * as S from './styles';
import HeaderApp from '../../componentes/header/Header'
import BodyApp from '../../componentes/body/Body'
import FooterApp from '../../componentes/footer/Footer'

function Produtos() {

	return (
		<S.Body>
		<HeaderApp></HeaderApp>
		<BodyApp page='Produtos'>
		</BodyApp>
		<FooterApp></FooterApp>
		</S.Body>
	)
}

export default Produtos
