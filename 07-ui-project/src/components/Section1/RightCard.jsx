import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 relative overflow-hidden w-80 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt=""></img>
      <RightCardContent index={props.index} tag={props.tag} />
    </div>
  );
};
export default RightCard;
