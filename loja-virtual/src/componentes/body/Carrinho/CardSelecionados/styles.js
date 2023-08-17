import styled from 'styled-components'

export const ContainerCard = styled.div`
display: flex;
flex-direction: row;

img{
	margin-top: 15px;
	width: 155px;
	height: 157px;
}
`

export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;

h1{
	color: #1C1818;
	font-family: Open Sans;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}

span{
	color: #141212;
	font-family: Poppins;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: capitalize;
	margin-bottom: 10px;
}`