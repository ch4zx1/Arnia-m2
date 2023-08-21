import * as S from './styles'

function CustomTitle({title})
{
	return (
		<>
		<S.Body>
		<h3>{title}</h3>
		<img src='./src/assets/line.svg'></img>
		</S.Body>
		</>
	)
}

export default CustomTitle