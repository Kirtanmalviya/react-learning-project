import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex bg-cyan-900 justify-between py-4 px-8">
      <h2 className="text-lg font-bold">Kirtan</h2>
      <div className="flex gap-10 underline">
        <Link className="text-lg font-medium" to="/">
          Home
        </Link>
        <Link className="text-lg font-medium" to="/about">
          About
        </Link>
        <Link className="text-lg font-medium" to="/courses">
          Courses
        </Link>
        <Link className="text-lg font-medium" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
