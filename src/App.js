import React, { useState } from "react";
import "./styles.css";

const emojiGroup = {
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😱": "Face Screaming in Fear",
  "😈": "Smiling Face with Horn",
  "👿": "Angry Face with Horn",
  "💀": "Skull",
  "🤡": "Clown Face",
  "👹": "Orge",
  "👻": "Ghost",
  "👽": "Alien",
  "🤖": "Robot"
};

var emojisWeknow = Object.keys(emojiGroup);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiGroup[userInput];

    if (meaning === undefined) {
      var meaning = "Ops! We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiGroup[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <nav id="navigation">Emojis Interpretur</nav>

      <div id="text">
        Enter any emojis and we will tell you its meaning in seconds😎.
      </div>
      <img
        id="image"
        src="https://wallpapercave.com/wp/wp3801910.jpg"
        alt="pic"
      />

      <input
        id="input-emoji"
        placeholder="Enter your emoji here..."
        onChange={emojiInputHandler}
      />
      <h2>{meaning}</h2>
      <p id="sub-text">Emojis we know</p>

      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
