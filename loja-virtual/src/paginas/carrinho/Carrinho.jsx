import * as S from './styles';
import HeaderApp from '../../componentes/header/Header'
import BodyCarrinho from '../../componentes/body/Carrinho/Body'
import FooterApp from '../../componentes/footer/Footer'

function Carrinho() {

  return (
    <S.Body>
    <HeaderApp></HeaderApp>
	<BodyCarrinho></BodyCarrinho>
	<FooterApp></FooterApp>
    </S.Body>
  )
}

export default Carrinho
