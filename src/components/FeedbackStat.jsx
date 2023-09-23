import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStat() {
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h3>{isNaN(average) ? 0 : average}</h3>
    </div>
  );
}
export default FeedbackStat;
