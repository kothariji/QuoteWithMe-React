import React, { useState, Fragment } from "react"
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";


import "./App.css";
import {
  AuthorInput,
  ColorBox,
  Footer,
  UserInput,
  UserOutput
} from "./Components/index"


const App = () => {
  const [textState, setTextState] = useState({
    text: "Chai.   Code.   Cube.",
  });

  const colors = [
    { code: "#1abc9c" },
    { code: "#2ecc71" },
    { code: "#3498db" },
    { code: "#9b59b6" },
    { code: "#34495e" },
    { code: "#f1c40f" },
    { code: "#e67e22" },
    { code: "#e74c3c" },
    { code: "#ecf0f1" },
    { code: "#050505" },
  ];

  const [backState, setBackState] = useState({
    color: "#f1c40f",
  });

  const [textColorState, setTextColorState] = useState({
    color: "#000000",
  });

  const [authorTextState, setAuthorTextState] = useState({
    text: "~kothariji",
  });

  const [authorState, setAuthorState] = useState({
    author: true,
  });

  const [radioState, setRadioState] = useState({
    value: "background",
  });

  const handleNameChange = (event) => {
    setTextState({ text: event.target.value });
  };

  const handleAuthorNameChange = (event) => {
    setAuthorTextState({ text: event.target.value });
  };

  const toggleAuthor = () => {
    setAuthorState({ author: !authorState.author });
  };

  const handleColorChange = (colorCode) => {
    if (radioState.value === "background") {
      setBackState({
        color: colorCode,
      });
    } else {
      setTextColorState({
        color: colorCode,
      });
    }
  };

  const handleRadio = (event) => {
    setRadioState({
      value: event.target.value,
    });
  };

  const downloadHandler = (event) => {
    event.preventDefault();
    domtoimage.toBlob(document.getElementById("my-node")).then(function (blob) {
      saveAs(blob, "myImage.png");
    });
  };

  const getQuote = () => {
    const randomNumber = Math.floor(Math.random() * (1600 - 1 + 1) + 1)
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          setTextState({ text: result[randomNumber].text })
          setAuthorTextState({ text: result[randomNumber].author })
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="App container-fluid">
      <h1 className="display-3 mt-5">Quote Maker</h1>
      <div className="row">
        <div className="col col-1"></div>
        <div className="col col-4">
          <UserInput text={textState.text} changed={handleNameChange} />

          <button
            className="btn btn-outline-dark btn-lg"
            onClick={toggleAuthor}
          >
            {authorState.author ? <span>Remove</span> : <span>Add</span>} Author
          </button>
          {authorState.author && (
            <Fragment>
              <br />
              <br />
              <br />
              <AuthorInput
                text={authorTextState.text}
                changed={handleAuthorNameChange}
              />
            </Fragment>
          )}
          <br />
          <br />
          <br />

          <FormControl component="fieldset">
            <FormLabel component="legend">
              <h3>Select the Option</h3>
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={radioState.value}
              onChange={handleRadio}
            >
              <FormControlLabel
                value="background"
                control={<Radio />}
                label="Background Color"
              />
              <FormControlLabel
                value="text"
                control={<Radio />}
                label="Text Color"
              />
            </RadioGroup>
          </FormControl>
          <div className="Colors">
            {colors.map(({ code }) => (
              <ColorBox
                color={code}
                changeColor={() => handleColorChange(code)}
                key={code}
              />
            ))}
          </div>
        </div>
        <div className="col col-7">
          <button
            className="btn btn-outline-dark btn-lg generate"
            onClick={getQuote}
          >
            Generate Random Quote
          </button>

          <UserOutput
            text={textState.text}
            authorText={authorTextState.text}
            showAuthor={authorState.author}
            backgroundColor={backState.color}
            textColor={textColorState.color}
          />
          <button
            className="btn btn-outline-dark btn-lg generate mt-0"
            onClick={downloadHandler.bind(this)}
          >
            Download image
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
