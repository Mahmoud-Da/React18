import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Order from "./components/Order";
import Area from "./components/Area";
import About_us from "./components/About_us";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/area" element={<Area />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About_us />} />
      </Routes>
    </>
  );
}

export default App;
