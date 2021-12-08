import { Link } from "react-router-dom";
import { ContainerHome } from "./style";

export const Home = () => {
  return (
    <div className="background-blue">
      <ContainerHome className="container">
        <h1>Welcome to the Trivia Challenge</h1>

        <p>You will be presented with 10 True or False questions</p>

        <p>Can you score 100%?</p>

        <Link to={"/questions"}>BEGIN </Link>
      </ContainerHome>
    </div>
  );
};
