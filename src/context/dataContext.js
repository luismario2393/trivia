import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {props.children}
    </DataContext.Provider>
  );
};
