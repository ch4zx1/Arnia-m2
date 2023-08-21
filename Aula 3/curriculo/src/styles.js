import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: column;
background-color: white;
justify-content: space-between;
align-items: center;
align-self: center;
`
export const Top = styled.div`
display: flex;
flex-direction: row;
height: 60px;
gap: 30px;`

export const ContainerUser = styled.div`
display: flex;
flex-direction: row;
width: 595px;
height: 170px;
background-color: #445FF6;
justify-content: center;
gap: 20px;`

export const ContainerUserDesc = styled.div`
display:flex; 
flex-direction: column;
justify-content: center;

h1{
	margin: 0px;
	color: #FFF;
	font-family: Open Sans;
	font-size: 48px;
	font-style: normal;
	line-height: normal;
}

h6{
	margin: 0px;
	color: #FFF;
	font-family: Poppins;
	font-size: 24px;
	font-style: normal;
	line-height: normal;
	text-transform: capitalize;
}`

export const ContainerBody = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
width: 595px;
`

export const ContainerCard = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;`

export const ContainerSkills = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const ContainerFix = styled.div`
display: flex;

span{
	color: #333;
	font-family: Poppins;
	font-size: 10px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}`