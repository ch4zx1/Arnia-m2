import * as S from './styles';
import HeaderApp from '../../componentes/header/Header'
import BodyApp from '../../componentes/body/Body'
import FooterApp from '../../componentes/footer/Footer'

function Checkout() {

  return (
    <S.Body>
    <HeaderApp></HeaderApp>
	<BodyApp page='Checkout'></BodyApp>
	<FooterApp></FooterApp>
    </S.Body>
  )
}

export default Checkout
