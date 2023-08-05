import * as S from './style'

function Card()
{
	return (
		<S.Body>
			<S.CardContainer>
				<S.Card>
					<span>Card title</span>
					<p>Card Subtitle</p>
					<p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
					<S.ContainerA>
					<a href="/">Card link</a>
					<a href="/">Another link</a>
					</S.ContainerA>
				</S.Card>
			</S.CardContainer>
		</S.Body>
	)
}

export default Card