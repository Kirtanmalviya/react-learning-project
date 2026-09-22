import { useParams } from "react-router-dom";
const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="text-white relative h-[80%]">
      <h1 className="absolute p-1 rounded-2xl px-2 left-1/2 text-4xl underline font-bold whitespace-nowrap top-1/2 -translate-x-1/2 -translate-y-1/2">
        {id} Course details
      </h1>
    </div>
  );
};
export default CourseDetail;
