import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
margin-right: 40px;
flex-wrap: wrap;
gap: 10px;

span{
	color: #000;
	font-family: Roboto;
	font-size: 10px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}
`

export const Top = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;

h6{
	margin: 0px;
	color: #000;
	font-family: Roboto;
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}

span{
	margin-top: 2px;
	color: #000;
	font-family: Roboto;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	opacity: 0.5;
}
`