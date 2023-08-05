import { BoxRegister } from "./styles"

function Register() {
  return (
    <>
      <BoxRegister>
        <h1>Arnia Trello</h1>
		<h2>Cadastro</h2>

		<div className='input-register'>
			<label htmlFor="nome-register">Nome completo</label>
			<input type="text" id="nome-register" name="nome"></input>

			<label htmlFor="email-register">E-mail</label>
			<input type="email" id="email-register" name="email"></input>

			<label htmlFor="senha-register">Senha</label>
			<input type="password" id="senha-register" name="senha"></input>

			<label htmlFor="resenha-register">Repita sua senha</label>
			<input type="password" id="resenha-register" name="resenha"></input>
		</div>
		<button>CADASTRAR</button>
      </BoxRegister>
    </>  )
}

export default Register
