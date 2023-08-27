import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #191C30;
gap: 30px;

height: 100vh;
width: 100vw;
`

export const ContainerLista = styled.div`
display: flex;
flex-direction: column;

background-color: #1E1E2C;
`

export const ContainerButton = styled.div`
display: flex;
flex-direction: row;
gap: 20px;


button{
	width: 150px;
	height: 40px;
	border-radius: 25px;
	border: 1px solid white;
	background-color: #1E1E2C;
	color: white;
	font-family: Poppins;
}
`