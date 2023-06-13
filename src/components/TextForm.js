import React, { useState } from "react";

import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleTextClear = () =>{
    setText("");
    props.showAlert("Text-Box Cleared", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyToClip = ()=>{
    var text = document.getElementById("my-box")
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  //This is a state we are declaring a constant variable text with
  //default value 'Enter Text Here' and in future whenever we want to
  //update the value of text variable we need to invoke a function
  //setText();

  const [text, setText] = useState("Enter Text Here"); //This is a
  //state variable

  // text = "new Text" Wrong way to update text variable
  // setText("Enter Your Text Here for Analyzing")//Correct way to

  //update text variable

  return (
    <>
      <div className="container mt-4" style={{color: props.mode==='dark'?'white':'#1b2456'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 mt-2">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="my-box"
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#1b2456', fontSize: '22px'}}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTextClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyToClip}>
          Copy Text
        </button>
      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'#1b2456'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} and {text.length} characters </p>
        <p>{0.008*(text.split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something to text-box above to preview it here'}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter Text",
};
