const Card = (props) => {
  return (
    <a href={props.url} target="_blank">
      <div className="h-40 overflow-hidden w-44 bg-white rounded-xl">
        <img
          className="h-full w-full object-cover"
          src={props.download_url}
          alt=""
        />
      </div>
    </a>
  );
};

export default Card;
