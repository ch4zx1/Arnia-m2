import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: row;
background-color: #6950A1;
height: 92px;
width: 100%;
`

export const ContainerLogo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 38px;

img{
	width: 128px;
	height: 38px;
}
`

export const ContainerCategoria = styled.div`
display: flex;
flex-direction: row;
width: 73%;

justify-content: center;
align-items: center;

span{
	color: #ECECEC;
	font-family: Poppins;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}
`