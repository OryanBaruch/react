import React, { useState, useEffect } from "react";
import PlayPauseAll from "./Buttons/PlayPauseAll";
import SingleButton from "./Buttons/SingleButton";

const ButtonPad = ({ allInstrumentsStates }) => {
  const [instrumentsWithToggleState, setInstrumentsWithToggle] = useState([]);
  const [playing, setPlay] = useState([]);
  const [player, setPlayer] = useState(false);

  //helping function so i can get track if i have actived sounds in the array. (playing)
  const isPlaying = (id) => {
    const findIfPlay = playing.find((element) => {
      console.log(element.id);
      return element.id === id;
    });
    return findIfPlay;
  };

  //delay : bring the calc of (audio time - the current time of the prev one.)
  const getDelay = () => {
    console.log("regular check");
    for (let i = 0; i < playing.length; i++) {
      if (playing[i].sound.currentTime !== 0) {
        const timeDiffrent = 8000 - playing[i].sound.currentTime;
        console.log(playing[i].sound.currentTime);
        return timeDiffrent;
      }
    }
  };


  //toggle All active/inactive sound.
  const toggleAll = () => {
    for (let i = 0; i < playing.length; i++) {
      const element = playing[i];
      console.log(element);
      if (element.active) {
        element.active = false;
        element.sound.pause();
        element.sound.currentTime = 0;
        setPlayer(false);
      } else {
        element.active = true;
        element.sound.play();
        setPlayer(true);
      }
    }
  };

  //map with useEffect the state from App
  useEffect(() => {
    const instrumentsWithToggle = allInstrumentsStates.map(
      ({ sound, theme, id, active }) => {
        const toggle = (id) => {
          if (active) {
            sound.pause();
            sound.currentTime = 0;

            active = false;
            // Remove the element from playing array in the state
            if (isPlaying(id)) {
              let filteredArray = playing.filter(
                (element) => element.active === true
              );
              setPlay(filteredArray);
              console.log(filteredArray);
            }
          } else {
            active = true;
            const delay = getDelay();
            if (!isPlaying(id)) {
              const newPlayList = playing.push({ id, sound, active });
              setPlay(newPlayList);
            }

            setTimeout(() => {
              // Add the element to playing array in the state
              sound.play();
              sound.loop = true;
            }, delay);
          }
        };
        return { toggle, sound, theme, id, active };
      }
    );
    setInstrumentsWithToggle(instrumentsWithToggle);
  }, []);

  return (
    <div>
      <div className="toggleAllButton">
        <PlayPauseAll player={player} toggleAll={toggleAll} />
      </div>
      <div className="buttons_container">
        {instrumentsWithToggleState.map(
          ({ active, toggle, sound, theme, id }) => {
            return (
              <div key={id}>
                <SingleButton
                  toggleAll={toggleAll}
                  sound={sound}
                  id={id}
                  theme={theme}
                  active={active}
                  onToggle={() => toggle(id)}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ButtonPad;
