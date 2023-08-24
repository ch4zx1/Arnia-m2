import { useContext } from "react";
import * as S from "./styles";
import { PaginaContext } from "../../context/CreateContext";

type Props = {
	imagem: string,
	titulo: string,
	conteudo: string,
	id: number
}

function Card({ imagem, titulo, conteudo, id }: Props) {
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
