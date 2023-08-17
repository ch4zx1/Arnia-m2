import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 180px;
height: 210px;

img {
	width: 155px;
	height: 157px;
}

span{
	color: #000;
	font-family: Poppins;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: capitalize;
}
`
export const ContainerBottom = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 5px;
gap: 7px;

button{
	width: 26px;
	height: 26px;
	border-radius: 8px;
	border: 1px solid #6950A1;x
}
`

