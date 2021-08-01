import React, { useState, useEffect } from "react";
import { Howler, Howl } from "howler";
import "./buttons.css";
import PlayCircle from "./PlayCircle";
import PauseCircle from "./PauseCircle";

const Buttons = ({ allInstrumentsStates, setAllInstrumentsStates }) => {

  const [play, setPlay] = useState(false)

  //fetch all active insturemnts
  const FetchAllActiveInsturments = () => {
    return allInstrumentsStates.audioClips.map((element, index) =>
      element.active ? index : element.active
    );
  };
  console.log(FetchAllActiveInsturments());

  //turns all active props to false, a condition will be add, !active ? pausePlay()
  const stopAllMusic = (src) => {
    const arrayCopy = [...allInstrumentsStates.audioClips];
    arrayCopy.map((element, index) => {
      if (arrayCopy[index].active === false) {
        stopMusic(element.sound);
      }
      return (arrayCopy[index].active = false);
    });
    setAllInstrumentsStates({ ...allInstrumentsStates, audioClips: arrayCopy });
  };

  const toggleButtonActiveStateByIndex = (index, src) => {
    //make a copy of the array and toggle the active property in the state.
    let arrayCopy = [...allInstrumentsStates];

    if (arrayCopy[index].active) {
      stopMusic(arrayCopy[index].sound);
      arrayCopy[index].active = false;
      
    } else {
      arrayCopy[index].active = true;
      startMusic(arrayCopy[index].sound);
    }
    setAllInstrumentsStates({ ...allInstrumentsStates, audioClips: arrayCopy });
  };
  Howler.volume(1.0);

  return (
    <>
      {
        <button className="pausePlaybutton" onClick={() => stopAllMusic()}>
          X
        </button>
      }
      <div className="buttons_container">
        {allInstrumentsStates.map((soundObj, index) => {
          return (
            <button
              className={toggleButtonStyleByIndex(index)}
              key={index}
              onClick={() =>
                toggleButtonActiveStateByIndex(index, soundObj.sound)
              }
            >
              {allInstrumentsStates[index].active ? (
                <PauseCircle />
              ) : (
                <PlayCircle />
              )}
              Sound {allInstrumentsStates[index].theme}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
