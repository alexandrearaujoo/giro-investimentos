import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: rgb(39, 48, 93);
  background: linear-gradient(
    180deg,
    rgba(39, 48, 93, 1) 64%,
    rgba(255, 255, 255, 1) 67%
  );

  @media screen and (min-width: 768px) {
    background: rgb(39, 48, 93);
    background: linear-gradient(
      90deg,
      rgba(39, 48, 93, 1) 65%,
      rgba(255, 255, 255, 1) 67%
    );
    flex-direction: row;
  }
`;

export const SectionImg = styled.section`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    > div {
      width: 95%;
      max-width: 700px;
      max-height: 500px;

      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-height: 500px;
      }
    }
  }
`;

export const SectionForm = styled.section`
  display: flex;
  width: 95%;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-right: 1rem;
  }
`;

export const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 400px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 5px 12px -4px ${({theme}) => theme.colors.blue2};

  > div,
  + div + div {
    margin-bottom: 1rem;
  }
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-family: ${({theme}) => theme.fonts.muli}, sans-serif;
  margin-bottom: 2rem;
  color: ${({theme}) => theme.colors.blue1};
  font-weight: ${({theme}) => theme.weigthts.fontWeight700};
`;
