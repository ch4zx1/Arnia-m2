import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const ContainerNot = styled.div`
display: flex;
flex-direction: row;
margin-top: 100px;
width: 700px;
height: 300px;
justify-content: center;
align-items: center;
gap: 50px;
border-radius: 25px;
background-color: #1E1E2C;
color: white;`

export const ContainerImg = styled.div`
display: flex;
flex-direction: column;

img{ 
	width: 100px;
	height: 100px;
}`

export const ContainerContent = styled.div`
display: flex;
flex-direction: column;
margin-top: -30px;

h1{ 
	font-family: Poppins;
}

span{
	font-family: Poppins;
	margin-bottom: 10px;
}`