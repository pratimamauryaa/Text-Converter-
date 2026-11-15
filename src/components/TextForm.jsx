import React, { useState } from "react";
import "./TextForm.css";
const TextForm = (props) => {
  const handleUpClick = () => {
    //console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handledownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("enter the text");
  //  text = "new text"     //wrong normal update nhi hoga
  //   setText("New text");  //correct way to chnage text

  return (
    <div className="text-form-container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-primary" onClick={handledownClick}>
        Convert to Lowercase
      </button>

      <button className="btn btn-primary" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary" onClick={handleCopyClick}>
        Copy Text
      </button>
    </div>
  );
};

export default TextForm;
