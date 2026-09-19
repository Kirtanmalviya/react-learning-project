import { useState } from "react";
const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [notes, setNotes] = useState([
    {
      title: "Good morning",
      detail: "chai piyo biscuit khao chai piyo biscuit khao",
    },
  ]);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDetail = (e) => {
    setDetail(e.target.value);
  };

  const saveNote = () => {
    // alert("Saving...");
    let newNote = {
      title: title,
      detail: detail,
    };
    setTitle("");
    setDetail("");

    setNotes([...notes, newNote]);
  };

  const deleteNote = (idx) => {
    let newNotes = [...notes];
    newNotes.splice(idx, 1);
    setNotes([...newNotes]);
  };

  return (
    <div className="h-screen w-screen lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex h-[40vh] flex-col lg:w-1/2 gap-4 p-3"
      >
        <h1 className="font-bold text-white text-2xl">Add a note</h1>
        <input
          onChange={(e) => {
            changeTitle(e);
          }}
          type="text"
          placeholder="Enter note heading"
          value={title}
          className="border-2 font-medium w-full outline-none py-2 px-5 border-white text-white rounded"
        ></input>
        <textarea
          onChange={(e) => {
            changeDetail(e);
          }}
          type="text"
          placeholder="Enter details"
          value={detail}
          className="border-2 min-h-30 font-medium remove-scroll outline-none w-full py-2 px-5 text-white border-white rounded"
        />
        <button
          onClick={saveNote}
          className="bg-white active:bg-gray-400 font-medium cursor-pointer text-black py-2 px-5 w-full rounded"
        >
          add note
        </button>
      </form>
      <div className="flex mt-9 lg:border-l border-white flex-col items-center h-[50%] lg:w-1/2">
        <h1 className="font-bold text-white text-2xl">Recent Notes</h1>
        <div className="w-full h-[55vh] m-3 remove-scroll flex flex-wrap px-7 gap-4 overflow-auto">
          {notes.map((ele, idx) => {
            return (
              <div
                key={idx}
                className="h-40 overflow-auto m-3 w-30 border-double border-blue-200 border-2 text-black bg-amber-100 rounded"
              >
                <h1 className="text-center italic border-b-white border-b-4 rounded bg-red-400 font-semibold text-sm">
                  {ele.title}
                </h1>
                <p className="pt-3 bg-amber-100 font-serif rounded text-gray-500 font-medium h-[69%] text-[13px] p-2">
                  {ele.detail}
                </p>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="text-white w-full rounded text-sm cursor-pointer active:scale-95 font-semibold bg-red-500"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
