import styled from "styled-components";

export const ContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  h2 {
    color: white;
    font-size: 4rem;
    text-align: start;
    max-width: 30rem;
    line-height: 1;
  }
  p {
    color: white;
    font-size: 2.5rem;
  }
`;

export const ContainerQuestion = styled.div`
  width: 100%;
  border-radius: 0 0 2rem 2rem;
`;

export const ContainerTitle = styled.div`
  width: 90%;
`;

export const ButtonTrue = styled.button`
  width: 18rem;
  padding: 1rem;
  font-size: 2rem;
  font-family: "Baloo Bhaijaan 2", cursive;
  font-weight: 700;
  border-radius: 2rem;
  border: none;
  background-color: var(--button-primary);
  color: white;
  cursor: pointer;
  margin: 1rem;

  :hover {
    background-color: #977ce1;
    transition: 0.3s ease-in-out;
  }
`;
export const ButtonFalse = styled.button`
  width: 18rem;
  padding: 1rem;
  font-size: 2rem;
  font-family: "Baloo Bhaijaan 2", cursive;
  font-weight: 700;
  border-radius: 2rem;
  border: none;
  background-color: #e5e5e5;
  color: var(--button-primary);
  cursor: pointer;
  margin: 1rem;
  :hover {
    border: 2px solid var(--button-primary);
    transition: 0.3s ease-in-out;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const ContainerScore = styled.div`
  background-color: var(--background);
  height: 6rem;
  width: 10rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  display: fle;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
`;
export const ContainerResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  a {
    align-self: center;
    text-align: center;
    background-color: var(--button-primary);
    display: inline-block;
    width: 30rem;
    padding: 1rem;
    border-radius: 3rem;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 600;
    color: white;
    &:hover {
      background-color: #977ce1;
      transition: 0.3s ease-in-out;
    }
  }
`;
export const ParrafoScore = styled.p`
  color: var(--background) !important;
  font-size: 5rem !important;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0;
`;
export const ParrafoPositivo = styled.p`
  line-height: 1;
  color: var(--button-primary) !important;
  font-size: 2rem !important;
  span {
    font-weight: 700;
    font-size: 4rem;
  }
`;
export const ParrafoNegativo = styled.p`
  line-height: 1;
  color: #fb2222 !important;
  font-size: 2rem !important;
  span {
    font-weight: 700;
    font-size: 4rem;
  }
`;
export const DivUltimo = styled.div`
  width: 95%;
`;
