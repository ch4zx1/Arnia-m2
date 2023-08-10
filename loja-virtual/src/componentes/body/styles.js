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
margin-left: 22px;
margin-right: 51px;
margin-top: 6px;

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
}

`