import { useContext } from "react";
import * as S from "./styles";
import { PaginaContext } from "../../context/CreateContext";

function Card({ imagem, titulo, conteudo, id }) {
  const [, setPagina] = useContext(PaginaContext);

  return (
    <S.Body>
      <img src={imagem}></img>
      <S.ContainerContent>
        <h1 onClick={() => setPagina(id)}>{titulo}</h1>
        <span>{conteudo}</span>
      </S.ContainerContent>
    </S.Body>
  );
}

export default Card;
