const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submited");
    console.log(e);
  };

  return (
    <div className="p-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="gap-3"
      >
        <input
          type="text"
          placeholder="Enter yout name"
          className="bg-gray-200 font-semibold p-4 rounded-l border-black border-2"
        />
        <button className="bg-amber-200 hover:bg-red-400 hover:text-white font-semibold border-black border-2 rounded-r p-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
