import * as S from "./styles";
import logo from "../../assets/arnia.svg";
import { useContext } from "react";
import { PaginaContext } from "../../context/CreateContext";

function Header({ categoria }: { categoria: string }) {
  const [, setPagina] = useContext(PaginaContext);

  return (
    <>
      <S.Body>
        <S.ContainerLogo>
          <img onClick={() => setPagina(0)} src={logo}></img>
        </S.ContainerLogo>
        <S.ContainerCategoria>
          <span>{categoria}</span>
        </S.ContainerCategoria>
      </S.Body>
    </>
  );
}

export default Header;
