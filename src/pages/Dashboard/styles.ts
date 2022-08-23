import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 755px;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 2;
  background-color: white;
  top: 75%;
  left: 50%;
  transform: translateX(-50%) translateY(-55%);
  border-radius: 8px;
  box-shadow: 0px 5px 12px -4px ${({theme}) => theme.colors.blue2};


  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    > svg {
      color: ${({ theme }) => theme.colors.blue2};
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    height: 500px;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const SectionForm = styled.section`
  width: 95%;
  max-width: 450px;
`;

export const Form = styled.form`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.muli}, sans-serif;
  font-weight: ${({ theme }) => theme.weigthts.fontWeight600};
  color: ${({ theme }) => theme.colors.blue1};
`;

export const Label = styled.label`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.weigthts.fontWeight400};

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FirstBgColor = styled.div`
  background: rgb(18, 93, 247);
  background: linear-gradient(
    166deg,
    rgba(18, 93, 247, 1) 65%,
    rgba(255, 255, 255, 1) 65%
  );
  width: 100%;
  min-height: 100vh;
  position: absolute;
`;

export const SecondBgColor = styled.div`
  background: rgb(39, 48, 93);
  background: linear-gradient(194deg, rgba(39, 48, 93, 1) 65%, transparent 65%);

  width: 100%;
  min-height: 100vh;
  position: absolute;
`;

