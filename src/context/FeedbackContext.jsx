import { createContext, useState } from "react";
import FeedbackData from "../data/feedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setEditFeedback] = useState({
    item: { rating: 10 },
    edit: false,
  });
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };
  const updateFeedback = (id, upitem) => {
    setFeedback(feedback.map((item) => (item.id === id ? upitem : item)));
    setEditFeedback({ item: { rating: 10 }, edit: false });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
