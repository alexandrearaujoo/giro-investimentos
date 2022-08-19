import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 95%;
  max-width: 500px;
  padding: 0.4rem;
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: 0.5s;
  margin-top: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue2};

  :hover {
    background-color: ${({ theme }) => theme.colors.blue1};
    color: ${({ theme }) => theme.colors.white};
  }
`;
