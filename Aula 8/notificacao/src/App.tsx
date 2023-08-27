import { useState } from "react"
import Notification from "./components/notificacao/Notificacao"
import * as S from './styles'

type NotificationProps = "NONE" | "SUCESS" | "WARNING" | "ERROR" | "INFO"

function App() {

	const [notification, setNotification] = useState<NotificationProps>('NONE');

  return (
    <>
      <div>
		<div>
		<Notification type={notification} title="Titulo :)" content="Conteudo" message="Mensagem adicional"></Notification>
		</div>
		<S.ContainerButton>
		<button onClick={() => {setNotification('SUCESS')}}>SUCESS</button>
		<button onClick={() => {setNotification('WARNING')}}>WARNING</button>
		<button onClick={() => {setNotification('ERROR')}}>ERROR</button>
		<button onClick={() => {setNotification('INFO')}}>INFO</button>
		</S.ContainerButton>
      </div>
    </>
  )
}

export default App
