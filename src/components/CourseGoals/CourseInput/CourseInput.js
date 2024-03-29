import React, { useState, useRef } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const buttonRef = useRef(null)
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
      
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} >
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <div className={`form-control__button ${!isValid ? "invalid" : ""}`}>
      <Button  type="submit" ref={buttonRef} > Add Goal</Button></div>
    </form>
  );
};

export default CourseInput;
