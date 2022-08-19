import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3.8rem;
  width: 95%;
`;

export const InputContainer = styled.div`
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.blue2};
  border-radius: 0.3rem;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  :focus-within {
    border: 1px solid #${({theme}) => theme.colors.blue1};
  }
  > input {
    width: 100%;
    padding: 0.6rem;
    border: none;
    background-color: transparent;
    font-size: 0.9rem;

    :focus {
      outline: none;
      border: none;
    }
    ::placeholder {
      font-family: ${({theme}) => theme.fonts.inter}, sans-serif;
      font-size: 0.9rem;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  > svg {
    padding-right: 5px;
    cursor: pointer;
    color: ${({theme}) => theme.colors.blue2};
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.weigthts.fontWeight500};
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.blue1};
`;
