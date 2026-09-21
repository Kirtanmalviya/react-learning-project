import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 font-semibold left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx} className="">
          <Card url={elem.url} download_url={elem.download_url} />
          <h2 className="font-bold text-lg">{elem.author}</h2>
        </div>
      );
    });
  }
  return (
    <div className="bg-black p-10 overflow-auto text-white h-screen">
      <div className="flex h-[82%] flex-wrap gap-4 p-2">{printUserData}</div>

      <div className="flex justify-center items-center gap-6 p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-sm active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default App;
