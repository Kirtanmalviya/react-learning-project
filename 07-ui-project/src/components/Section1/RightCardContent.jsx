const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.index + 1}
      </h2>
      <div>
        <p className="text-xl text-white mb-14 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. alias
          doloremque perspiciatis cumque eveniet.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-7 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
