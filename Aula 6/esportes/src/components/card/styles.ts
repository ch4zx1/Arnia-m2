import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: row;
width: 999px;
height: 284px;
justify-content: center;
gap: 18px;
border-radius: 10px;
border: 1px solid #6950A1;
background: #FFF;

img{
	margin-left: 23px;
	width: 401px;
	height: 242px;
	align-self: center;
}
`

export const ContainerContent = styled.div`
display: flex;
flex-direction: column;
margin-right: 30px;

h1{
	margin-bottom: 5px;
	color: #6950A1;
	font-family: Poppins;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}

span{
	color: #000;
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}
`