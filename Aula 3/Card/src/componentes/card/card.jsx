/* eslint-disable react/prop-types */
import * as S from './style'

function Card({title, sub, desc, link, linkref, anotherlink, anotherref})
{
	return (
		<S.Body>
			<S.CardContainer>
				<S.Card>
					<span>{title}</span>
					<p>{sub}</p>
					<p>{desc}</p>
					<S.ContainerA>
					<a href={linkref}>{link}</a>
					<a href={anotherref}>{anotherlink}</a>
					</S.ContainerA>
				</S.Card>
			</S.CardContainer>
		</S.Body>
	)
}

export default Card