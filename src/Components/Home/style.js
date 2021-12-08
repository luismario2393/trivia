import styled from "styled-components";

export const ContainerHome = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  h1 {
    color: white;
    font-size: 5rem;
    line-height: 1;
  }
  p {
    color: white;
    font-size: 3rem;
  }

  a {
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
