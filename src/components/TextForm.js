import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
 
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
 
  const handleCopy = () => {
    var text = document.getElementById('text');
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" id="text" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear text</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Yout text summary</h3>
        <p>{text.split("").length} words and {text.length} charactors</p>
        <h3>Reading Time</h3>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter somthing in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
