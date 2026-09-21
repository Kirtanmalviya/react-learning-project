import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};
export default App;
