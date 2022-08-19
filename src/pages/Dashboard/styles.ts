import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SectionForm = styled.section`
  width: 95%;
  max-width: 450px;
  height: 300px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  width: 95%;
  max-width: 450px;
  height: 300px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.muli}, sans-serif;
  font-weight: ${({ theme }) => theme.weigthts.fontWeight600};
  color: ${({ theme }) => theme.colors.blue1};
`;

export const Span = styled.span``;

export const Label = styled.label`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.weigthts.fontWeight400};

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
