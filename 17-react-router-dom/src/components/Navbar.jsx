import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-blue-400 text-white font-bold">
      <h3>Kirtan</h3>
      <div className="flex gap-4 underline">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};
export default Navbar;
