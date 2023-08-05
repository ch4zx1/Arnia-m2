import { BoxLogin } from "./styles"

function Login() {
  return (
    <>
      <BoxLogin>
        <h1>Arnia Trello</h1>
		<div className='input-login'>
		<label htmlFor="email-login">E-mail</label>
		<input type="email" id="email-login" name="email"></input>
		<label htmlFor="senha-login">Senha</label>
		<input type="password" id="senha-login" name="senha"></input>
		</div>
		<button>ENTRAR</button>
		<a href="./register">Cadastre-se</a>
      </BoxLogin>
    </>  )
}

export default Login
