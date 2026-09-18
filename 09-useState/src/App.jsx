import { useState } from "react";
const App = () => {
  const [a, setA] = useState(0);

  function increaseCount() {
    setA(a + 1);
  }

  function decreaseCount() {
    setA(a - 1);
  }

  return (
    <div className="h-screen w-full flex flex-col flex-wrap justify-center items-center">
      <h1 className="px-20 rounded-xl font-bold py-15 text-5xl bg-amber-200 w-50 text-center">
        {a}
      </h1>
      <div className="pt-6">
        <button
          className="bg-black m-3 font-semibold text-white h-7 w-22 rounded-sm pb-3"
          onClick={increaseCount}
        >
          increase
        </button>
        <button
          className="bg-black m-3 font-semibold text-white h-7 w-22 rounded-sm pb-3"
          onClick={decreaseCount}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default App;
