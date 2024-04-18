import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";
// to crate an array that will contain the messages to be displayed
const messages = ["Hello", "How are you", "I am fine"];

function App() {
  const [step, setStep] = useState(1);
  // adding an open and close button
  const [isOpen, setIsOpen] = useState(true);
  const handlePre = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    setStep((s) => s + 1);
    // setStep((s) => s + 1);
  };

  return (
    <div>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </button>
      <Test />
      {isOpen && (
        <div className="wrapper">
          <div className="numberWrapper">
            {" "}
            {/* this  it to create a div that will contain the numbers */}
            <div className={step >= 1 ? "active" : ""}>1</div>{" "}
            {/* this is the div that contains the numbers and the conditions to be taken for the app to render one of them */}
            <div className={step >= 2 ? "active" : ""}>2</div>{" "}
            {/* this is the div that contains the numbers and the conditions to be taken for the app to render one of them */}
            <div className={step >= 3 ? "active" : ""}>3</div>{" "}
            {/* this is the div that contains the numbers and the conditions to be taken for the app to render one of them */}
          </div>
          <p>
            {step}: {messages[step - 1]}
          </p>{" "}
          {/* this  it to create a message */}
          {/* this  it to create a div that will contain the buttons */}
          <div className="btnGroup">
            <button onClick={() => handlePre()}>Previous</button>
            <button onClick={() => handleNext()}>Next</button>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
