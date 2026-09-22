import { useNavigate } from "react-router-dom";
const About = () => {
  let navigate = useNavigate();

  return (
    <div className="text-white relative h-[80%]">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-emerald-800 cursor-pointer active:scale-95 text-white font-medium rounded py-3 px-3 m-3"
      >
        Return to home page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-emerald-800 cursor-pointer active:scale-95 text-white font-medium rounded py-3 px-3 m-3"
      >
        Back
      </button>
      <h1 className="absolute left-1/2 text-6xl underline font-bold whitespace-nowrap top-1/2 -translate-x-1/2 -translate-y-1/2">
        About Page
      </h1>
    </div>
  );
};
export default About;
