import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ handelDelete }) {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) return <p>no feedback yet</p>;
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} handelDelete={handelDelete} />
        );
      })}
    </div>
  );
}
export default FeedbackList;
