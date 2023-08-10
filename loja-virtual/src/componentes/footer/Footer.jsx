import * as S from './styles'

function FooterApp(){
	return(
		<S.Body>
			<S.ContainerFooter>
			<span>Meios de pagamento:</span>
			<S.ContainerImgs>
			<img src='./src/img/visa.svg'></img>
			<img src='./src/img/master.svg'></img>
			<img src='./src/img/boleto.svg'></img>
			<img src='./src/img/hiper.svg'></img>
			</S.ContainerImgs>
			</S.ContainerFooter>
		</S.Body>
	)
}

export default FooterApp