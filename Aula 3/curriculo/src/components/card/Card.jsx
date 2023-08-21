import * as S from './styles'

function Card({title, date, desc}){

	return(
		<>
		<S.Body>
			<S.Top>
				<h6>{title}</h6>
				<span>{date}</span>
			</S.Top>
			<span>{desc}</span>
		</S.Body>
		</>
	)
}

export default Card