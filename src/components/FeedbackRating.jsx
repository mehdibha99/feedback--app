import React from "react";
import { useContext, useState, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackRating({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);
  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  const [selected, setSelected] = useState(10);
  const handeleChange = (e) => {
    setSelected(Number(e.currentTarget.value));
    select(e.currentTarget.value);
  };
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          onChange={handeleChange}
          checked={selected === 1}
          value="1"
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          onChange={handeleChange}
          checked={selected === 2}
          value="2"
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          onChange={handeleChange}
          checked={selected === 3}
          value="3"
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="num4"
          onChange={handeleChange}
          checked={selected === 4}
          value="4"
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          onChange={handeleChange}
          checked={selected === 5}
          value="5"
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="num6"
          onChange={handeleChange}
          checked={selected === 6}
          value="6"
        />

        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="num7"
          onChange={handeleChange}
          checked={selected === 7}
          value="7"
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="num8"
          onChange={handeleChange}
          checked={selected === 8}
          value="8"
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="num9"
          onChange={handeleChange}
          checked={selected === 9}
          value="9"
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="num10"
          onChange={handeleChange}
          checked={selected === 10}
          value="10"
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

export default FeedbackRating;
