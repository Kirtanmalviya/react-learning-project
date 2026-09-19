import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <div className="">
      <button onClick={getData}>Get data</button>
      {data.map((ele, idx) => {
        return (
          <h3 key={idx}>
            {ele.author} no.{idx + 1}
          </h3>
        );
      })}
    </div>
  );
};
export default App;
