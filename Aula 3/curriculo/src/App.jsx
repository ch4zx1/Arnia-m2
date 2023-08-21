import Card from './components/card/Card'
import Contato from './components/contatos/contatos'
import CustomTitle from './components/customtitle/CustomTitle'
import Skill from './components/skills/Skills'
import * as S from './styles'

function App() {

  return (
    <>
    <S.Body>
		<S.Top>
		<Contato img='./src/assets/email.svg' conteudo='dempsliam@gmail.com'></Contato>
		<Contato img='./src/assets/link.svg' conteudo='www.civie/liamdem.com'></Contato>
		<Contato img='./src/assets/telefone.svg' conteudo='+366 010 101 001'></Contato>
		</S.Top>
		<S.ContainerUser>
			<img src='./src/assets/user.svg'></img>
			<S.ContainerUserDesc>
				<h1>Liam Dempsey</h1>
				<h6>Professional Photographer</h6>
			</S.ContainerUserDesc>
		</S.ContainerUser>
		<S.ContainerBody>
		<CustomTitle title='About Me'></CustomTitle>
		<S.ContainerFix>
		<span>Donec a augue gravida, vulputate ligula et, pellentesque arcu. 🤖Morbi feugiat eros nec sem ultrices, et venenatis velit posuere. Donec bibendum commodo dui, eget sollicitudin urna sagittis non. Donec ac commodo tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</span>
		</S.ContainerFix>
		<CustomTitle title='Education'></CustomTitle>
		<S.ContainerCard>
		<Card title='Ryerson University' date='2010-2013' desc='Parallel to the Potsgraduate degree in computer security...'></Card>
		<Card title='LA University' date='2010-2013' desc='Parallel to the Potsgraduate degree in computer security...'></Card>
		<Card title='Ryerson University' date='2010-2013' desc='Parallel to the Potsgraduate degree in computer security...'></Card>
		</S.ContainerCard>
		<CustomTitle title='Experience'></CustomTitle>
		<S.ContainerCard>
		<Card title='Civie - UXUI Designer' date='2010-2013' desc='Parallel to the Potsgraduate degree in computer security...'></Card>
		<Card title='Despegar - FrontEnd Dev' date='2010-2013' desc='Parallel to the Potsgraduate degree in computer security...'></Card>
		</S.ContainerCard>
		<CustomTitle title='Skills'></CustomTitle>
		<S.ContainerSkills>
			<Skill name='Flutter' img='./src/assets/3.svg'></Skill>
			<Skill name='React native' img='./src/assets/3.svg'></Skill>
			<Skill name='Ionic' img='./src/assets/3.svg'></Skill>
			<Skill name='Unity' img='./src/assets/5.svg'></Skill>
		</S.ContainerSkills>
		</S.ContainerBody>
	</S.Body>
    </>
  )
}

export default App
