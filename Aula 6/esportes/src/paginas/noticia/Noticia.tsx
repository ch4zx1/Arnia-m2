import * as S from "./styles";

function Noticia({ array }) {
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
