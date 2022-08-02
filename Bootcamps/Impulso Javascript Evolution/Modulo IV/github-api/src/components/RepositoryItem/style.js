import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  border-radius: 8px;
  border: 1px solid #0fad7a;
  background-color: #101010;
  margin: 16px 16px;
`;

export const WrapperTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom-style: double;
  border-color: #0fad7a;
`;

export const WrapperSpan = styled.span`
    color: #0fad7a;
`

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 8px 0 0;
  color: #0fad7a;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #fff;
  &: hover {
    color: #0fad7a;
  }
`;
