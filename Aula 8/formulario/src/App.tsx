import * as S from "./styles";

function App() {
  return (
    <>
      <S.Body>  
        <S.ContainerForm>
          <h1>Endereço</h1>
          <S.ContainerInput>
            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep"></input>

            <label htmlFor="rua">Nome da Rua</label>
            <input type="text" id="rua"></input>

            <label htmlFor="numero">Numero</label>
            <input type="text" id="numero"></input>

            <label htmlFor="comp">Complemento</label>
            <input type="text" id="comp"></input>

            <label htmlFor="bairro">Bairro</label>
            <input type="text" id="bairro"></input>

            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade"></input>

            <label htmlFor="estado">Estado</label>
            <input type="text" id="estado"></input>
          </S.ContainerInput>
          <button>Continuar</button>
        </S.ContainerForm>
      </S.Body>
    </>
  );
}

export default App;
