import * as S from './styles';
import HeaderApp from '../../componentes/header/Header'
import BodyCheckout from '../../componentes/body/Checkout/Body'
import FooterApp from '../../componentes/footer/Footer'

function Checkout() {

  return (
    <S.Body>
    <HeaderApp></HeaderApp>
	<BodyCheckout></BodyCheckout>
	<FooterApp></FooterApp>
    </S.Body>
  )
}

export default Checkout
