import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Woman";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
