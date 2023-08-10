/* eslint-disable react/prop-types */
import * as S from './styles'

function BodyApp({page})
{
	return(
		<S.Body>
		<S.ContainerTop>
		<h1>{page}</h1>
		<S.ContainerContador>
			<span>1</span>
		</S.ContainerContador>
		</S.ContainerTop>
		</S.Body>
	)
}

export default BodyApp