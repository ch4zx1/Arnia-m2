import * as S from './styles'

function Contato({img, conteudo})
{
	return(
		<>
		<S.Body>
		<S.ContainerImg>
		<img src={img}></img>
		</S.ContainerImg>
		<span>{conteudo}</span>
		</S.Body>
		</>
	)
}

export default Contato