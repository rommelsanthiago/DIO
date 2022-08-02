import React from "react";
import * as S from "./style";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle><S.WrapperSpan>Name:</S.WrapperSpan> {name}</S.WrapperTitle>
      <S.WrapperContent>
        <S.WrapperFullName>Link:</S.WrapperFullName>
        <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
          {fullName}
        </S.WrapperLink>
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default RepositoryItem;
