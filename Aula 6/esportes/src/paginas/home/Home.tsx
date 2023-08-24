import Card from "../../components/card/Card";
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
	}[]
}

function Home({ array }: Props) {
  return (
    <>
      <S.Body>
        <S.ContainerNoticias>
          {array.map((item) => (
            <div key={item.id}>
              <Card
                imagem={item.img}
                titulo={item.titulo}
                conteudo={item.descricao}
                id={item.id}
              ></Card>
            </div>
          ))}
        </S.ContainerNoticias>
      </S.Body>
    </>
  );
}

export default Home;
