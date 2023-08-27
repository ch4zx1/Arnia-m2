import * as S from './styles'

type NotificationProps = {
	type: "NONE" | "SUCESS" | "WARNING" | "ERROR" | "INFO",
	title: string,
	content: string,
	message: string
}

const nonerender = {
	display: "none"
}

const sucessrender = {
	border: "yellow 1px solid"
}

const errorrender = {
	border: "red 1px solid"
}

const inforender = {
	border: "white 1px solid"
}

const warningrender = {
	border: "orange 1px solid"
}

const getStyle = (type: "NONE" | "SUCESS" | "WARNING" | "ERROR" | "INFO") => {

	if(type === "NONE")
	{
		return nonerender
	}
	else if(type === "SUCESS")
	{
		return sucessrender
	}
	else if(type === "WARNING")
	{
		return warningrender
	}
	else if(type === "ERROR")
	{
		return errorrender
	}
	else if(type === "INFO")
	{
		return inforender
	}

}

function Notification({type, title, content, message}: NotificationProps){
	return(
		<>
		<S.Body>
			<S.ContainerNot style={getStyle(type)}>
			<S.ContainerImg>
			{type === 'SUCESS' && <img src='./src/assets/sucess.svg'></img>}
			{type === 'WARNING' && <img src='./src/assets/warning.svg'></img>}
			{type === 'ERROR' && <img src='./src/assets/error.svg'></img>}
			{type === 'INFO' && <img src='./src/assets/info.svg'></img>}
			</S.ContainerImg>
			<S.ContainerContent>
			<h1>{title}</h1>
			<span>{content}</span>
			<span>{message}</span>
			</S.ContainerContent>
			</S.ContainerNot>
		</S.Body>
		</>
	)
}

export default Notification