import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.2rem;
  margin: 1rem 0;

  input {
    border: 1px solid #fff;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px 16px;
    font-weight: 500;
    font-size: 1.5rem;
    border: 1px solid #0fad7a;
    background-color: #000;
    color: #fff;
    ::placeholder {
        color: #fff;
    }
  }

  button {
    background-color: #0fad7a;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #04765c;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      font-size: 1.5rem;
      color: #fff;
      background: transparent;
    }
  }
`;
