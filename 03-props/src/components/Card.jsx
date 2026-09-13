const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img}></img>
        <h1>
          {props.user},{props.age}
        </h1>
        <p>lorem random words in paragraph tag idk what to type more in it.</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
