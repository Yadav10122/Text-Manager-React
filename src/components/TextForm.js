import React, { useState } from "react";
export default function TextForm(props) {

  //for setting text in text area
  const [text, setText] = useState("Enter text here");

  //for uppercase the letter
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    props.showAlert("text is converted to upper case", "success");
    setText(newText);
  };

  //for lowercase the letter
  const handleLowClick = () => {

    let newText = text.toLocaleLowerCase();
    props.showAlert("text is converted to lower case", "success");
    setText(newText);
  };

  //on changing the text setting updated text value
  const handleonChange = (event) => {
    setText(event.target.value);
  };

//to copy text in clipboard
  const handleCopying = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text is copied", "success");
    document.getSelection().removeAllRanges();
  };

 //to capitalize the text
  const handleCapitalize = () => {

    let newtext = text.charAt(0).toUpperCase() + text.slice(1);
    props.showAlert("First letter converted to upper case", "success");
    setText(newtext);
  };
  
  //to clear the text
  const handleClear = () => {
    let newText = "";
    props.showAlert("text is cleared", "success");
    setText(newText);
  };

  //to remove extra spaces
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces has been managed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor:
            props.mode === "dark"
              ? "#24171a"
              : props.mode === "info"
                ? "#146c80"
                : props.mode === "danger"
                  ? "#9e130e"
                  : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                      ? "#042743"
                      : "white",
          color: props.mode === "dark"
            ? "#dbe8e5"
            : props.mode === "info"
              ? "white"
              : props.mode === "danger"
                ? "#61ecf1"
                : props.mode === "warning"
                  ? "#3636f3"
                  : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "#24171a"
                  : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                      ? "#9e130e"
                      : props.mode === "warning"
                        ? "#c9c90c"
                        : props.mode === "primary"
                          ? "#042743"
                          : "white",
              color: props.mode === "dark"
                ? "#dbe8e5"
                : props.mode === "info"
                  ? "white"
                  : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                      ? "#3636f3"
                      : props.mode === "primary"
                        ? "#fbd8bc"
                        : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          style={{
            backgroundColor:
              props.mode === "dark"
                ? "#24171a"
                : props.mode === "info"
                  ? "#146c80"
                  : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                      ? "#c9c90c"
                      : props.mode === "primary"
                        ? "#042743"
                        : "white",
            color: props.mode === "dark"
              ? "#dbe8e5"
              : props.mode === "info"
                ? "white"
                : props.mode === "danger"
                  ? "#61ecf1"
                  : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                      ? "#fbd8bc"
                      : "black",
          }}
          onClick={handleUpClick}
        >
          {" "}
          Convert To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          style={{
            backgroundColor:
              props.mode === "dark"
                ? "#24171a"
                : props.mode === "info"
                  ? "#146c80"
                  : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                      ? "#c9c90c"
                      : props.mode === "primary"
                        ? "#042743"
                        : "white",
            color: props.mode === "dark"
              ? "#dbe8e5"
              : props.mode === "info"
                ? "white"
                : props.mode === "danger"
                  ? "#61ecf1"
                  : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                      ? "#fbd8bc"
                      : "black",
          }}
          onClick={handleLowClick}
        >
          {" "}
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          style={{
            backgroundColor:
              props.mode === "dark"
                ? "#24171a"
                : props.mode === "info"
                  ? "#146c80"
                  : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                      ? "#c9c90c"
                      : props.mode === "primary"
                        ? "#042743"
                        : "white",
            color: props.mode === "dark"
              ? "#dbe8e5"
              : props.mode === "info"
                ? "white"
                : props.mode === "danger"
                  ? "#61ecf1"
                  : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                      ? "#fbd8bc"
                      : "black",
          }}
          onClick={handleCopying}
        >
          {" "}
          Copy To Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleCapitalize}
          style={{
            backgroundColor:
              props.mode === "dark"
                ? "#24171a"
                : props.mode === "info"
                  ? "#146c80"
                  : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                      ? "#c9c90c"
                      : props.mode === "primary"
                        ? "#042743"
                        : "white",
            color: props.mode === "dark"
              ? "#dbe8e5"
              : props.mode === "info"
                ? "white"
                : props.mode === "danger"
                  ? "#61ecf1"
                  : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                      ? "#fbd8bc"
                      : "black",
          }}
        >
          {" "}
          Capitilize first letter
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          style={{
            backgroundColor:
              props.mode === "dark"
                ? "#24171a"
                : props.mode === "info"
                  ? "#146c80"
                  : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                      ? "#c9c90c"
                      : props.mode === "primary"
                        ? "#042743"
                        : "white",
            color: props.mode === "dark"
              ? "#dbe8e5"
              : props.mode === "info"
                ? "white"
                : props.mode === "danger"
                  ? "#61ecf1"
                  : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                      ? "#fbd8bc"
                      : "black",
          }}
          onClick={handleClear}
        >
          {" "}
          Clear All
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          style={{
            backgroundColor:
              props.mode === "dark"
                ? "#24171a"
                : props.mode === "info"
                  ? "#146c80"
                  : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                      ? "#c9c90c"
                      : props.mode === "primary"
                        ? "#042743"
                        : "white",
            color: props.mode === "dark"
              ? "#dbe8e5"
              : props.mode === "info"
                ? "white"
                : props.mode === "danger"
                  ? "#61ecf1"
                  : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                      ? "#fbd8bc"
                      : "black",
          }}
          onClick={handleSpaces}
        >
          {" "}
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{
          backgroundColor:
            props.mode === "dark"
              ? "#24171a"
              : props.mode === "info"
                ? "#146c80"
                : props.mode === "danger"
                  ? "#9e130e"
                  : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                      ? "#042743"
                      : "white",
          color: props.mode === "dark"
            ? "#dbe8e5"
            : props.mode === "info"
              ? "white"
              : props.mode === "danger"
                ? "#61ecf1"
                : props.mode === "warning"
                  ? "#3636f3"
                  : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
        }}
      >
        <h3>Your text Summary</h3>
        <p>

          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words And {text.length} character
        </p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
