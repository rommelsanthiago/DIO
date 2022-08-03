import React, { useState } from "react";
import * as S from "./style";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (usernameForSearch){
      getUser(usernameForSearch);
    }
  };

  const enterKeyPress = (eventKey) => {
    if (eventKey.key === "Enter") {
        eventKey.preventDefault();
        return submitGetUser()
    }
}

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o nome do usuário para pesquisar..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
          onKeyPress={enterKeyPress}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
