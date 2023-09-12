import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #191C30;
`

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #1E1E2C;
padding: 40px;
width: 30vw;
height: 80vh;
border-radius: 25px;
border: 8px solid #181B2F;
color: white;
font-family: Poppins;

button{
	margin-top: 30px;
	height: 5vh;
	width: 25vw;

	border-radius: 5px;
	border: 1px solid #469CF0;
	background-color: #469CF0;

	color: white;
	font-family: Poppins;
}`

export const ContainerInput = styled.div`
display: flex;
flex-direction: column;
width: 25vw;

label{
	font-size: 16px;
	margin-bottom: 5px;
}

input{
	background-color: #1E1E2C;
	border-radius: 5px;
	border: 1px solid white;
	height: 30px;
	padding-left: 10px;
	padding-right: 10px;
	margin-bottom: 10px;
	color: white;
	font-family: Poppins;
}
`