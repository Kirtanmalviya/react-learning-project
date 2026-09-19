import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";
const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex overflow-x-auto flex-nowrap gap-10 w-2/3 p-6 "
    >
      {props.users.map(function (elem, index) {
        return (
          <RightCard key={index} index={index} img={elem.img} tag={elem.tag} />
        );
      })}
    </div>
  );
};

export default RightContent;
