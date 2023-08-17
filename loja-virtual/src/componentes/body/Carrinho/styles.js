import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: column;
height: 670px;
width: 595px;
background-color: white;
`

export const ContainerTop = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-left: 32px;
margin-right: 51px;
margin-top: 10px;

h1 {
	margin: 0;
	font-family: Poppins;
	font-size: 40px;
	font-style: normal;
	font-weight: 400;
}`

export const ContainerContador = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 49px;
height: 44px;
flex-shrink: 0;
background-color: #6950A1;
border-radius: 10px;

span {
	color: #FFF;
	font-family: Poppins;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}`

export const ContainerProdutos = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	margin-left: 35px;
	margin-right: 35px;
	height: 380px;
	gap: 36px;
	overflow: auto;
`

export const ContainerBottom = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
margin-left: 30px;
margin-right: 30px;
gap: 10px;

span{
	color: #141212;
	font-family: Poppins;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: capitalize;
}

button{
	width: 211px;
	height: 43px;
	background-color: #6950A1;
	border-radius: 10px;
	border: 1px solid;
	color: #FFF;
	font-family: Poppins;
	font-size: 20px;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
}`