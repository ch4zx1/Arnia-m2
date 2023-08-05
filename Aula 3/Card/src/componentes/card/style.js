import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: row;
background-color: #E5E5E5;
width: 266vh;
height: 98vh;
`

export const CardContainer = styled.div`
display: flex;
width: 350px;
height: 280px;
background-color: white;
align-self: center;
margin-left: 1000px;
`
export const Card = styled.div`
display: flex;
flex-direction: column;
margin-left: 30px;
margin-right: 30px;
margin-top: 30px;

span{
	font-size: 36px
}

p{
	font-size: 18px;
}
`

export const ContainerA = styled.div`
display: flex;
flex-direction: row;
gap: 20px;`