import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackRating from "./FeedbackRating";
import { useContext, useState, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForms() {
  const [text, setText] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setIsDisable(false);
    }
  }, [feedbackEdit]);

  let handelChange = (e) => {
    setText(e.target.value);
    if (text === "") {
      setIsDisable(true);
      setMessage("");
    } else if (text !== "" && text.trim().length < 10) {
      setIsDisable(true);
      setMessage("the text must be at least 10 characters");
    } else {
      setIsDisable(false);
      setMessage("");
    }
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      setIsDisable(true);
      setText("");

      if (feedbackEdit.edit !== true) {
        addFeedback({
          id: feedbackEdit.item.id,
          text: text,
          rating: Number(rating),
        });
      } else {
        updateFeedback(feedbackEdit.item.id, {
          id: feedbackEdit.item.id,
          text: text,
          rating: rating,
        });
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handelOnSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedbackRating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="writer a review"
            className="input"
            onChange={handelChange}
            value={text}
          />
          <Button type={"submit"} version={"secondary"} isDisable={isDisable}>
            send
          </Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  );
}
