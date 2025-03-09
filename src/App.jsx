import Header from "./components/Header";
import Menu from "./components/Menu";
import Create from "./components/Create";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/Basket";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/create" element={<Create />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
};

export default App;
