import React from "react";
import Header from "../Header";
import * as S from "./style";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <S.WrapperTitle>
        Github Profile Search
      </S.WrapperTitle>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
