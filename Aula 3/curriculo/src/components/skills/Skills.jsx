import * as S from './styles'

function Skill({name, img})
{
	return(
		<>
		<S.Body>
		<span>{name}</span>
		<img src={img} alt="skill"/>
		</S.Body>
		</>
	)
}

export default Skill