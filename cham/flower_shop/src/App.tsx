import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Order from "./components/Order";
import Area from "./components/Area";
import About_us from "./components/About_us";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Order />
        <Area />
        <About_us />
      </BrowserRouter>
    </>
  );
}

export default App;
