import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components";
import { Questions } from "./Components";
import { DataProvider } from "./context/dataContext";

const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
