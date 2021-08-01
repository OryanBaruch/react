import React, { useEffect, useState } from "react";
import PauseCircle from "./PauseCircle";
import PlayCircle from "./PlayCircle";
import "./buttons.css";

const SingleButton = ({ theme, active, onToggle }) => {
  const [player, setPlayer] = useState(false);

  //helper function so i can toggle which ever i want in the array
  const handleToggle = () => {
    if (!player) {
      onToggle();
      setPlayer(true);
      active=true
    } else {
      active=false
      setPlayer(false);
      onToggle();
    }
  };

  return (
    <>
      <div className="buttons_container">
        <button
          className={player ? "state active" : "state inactive"}
          onClick={handleToggle}
        >
          {!player ? <PlayCircle /> : <PauseCircle />}
          <div className="theme">{theme}</div>
        </button>
      </div>
    </>
  );
};

export default SingleButton;
