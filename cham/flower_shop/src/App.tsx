import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Order from "./components/Order";
import Area from "./components/Area";
import About_us from "./components/About_us";
import Personalized_touch from "./components/Personalized_touch";
import Prompt_delivery from "./components/Prompt_delivery";
import End from "./components/End";

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
        <Route path="/personalized_touch" element={<Personalized_touch />} />
        <Route path="/prompt_delivery" element={<Prompt_delivery />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </>
  );
}

export default App;
