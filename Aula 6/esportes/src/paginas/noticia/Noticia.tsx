import * as S from "./styles";

type Props = {
	array: {
		id: number,
		img: string,
		titulo: string,
		descricao: string,
		author: string,
		data: string,
		content: string,
	}
}

function Noticia({ array }: Props) {
  return (
    <>
      <S.Body>
        <h1>{array.titulo}</h1>
        <span>
          Por {array.author} - {array.data}
        </span>
        <img src={array.img}></img>
        <span>{array.content}</span>
      </S.Body>
    </>
  );
}

export default Noticia;
