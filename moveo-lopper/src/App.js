import "./App.css";
import audio1 from "./audioTracks/audio1.mp3";
import audio2 from "./audioTracks/audio2.mp3";
import audio3 from "./audioTracks/audio3.mp3";
import audio4 from "./audioTracks/audio4.mp3";
import audio5 from "./audioTracks/audio5.mp3";
import audio6 from "./audioTracks/audio6.mp3";
import audio7 from "./audioTracks/audio7.mp3";
import audio8 from "./audioTracks/audio8.mp3";
import audio9 from "./audioTracks/audio9.mp3";
import React, { useState } from "react";
import ButtonPad from "./components/ButtonPad";

export const audioClips = [
  { sound: new Audio(audio1), theme: "Techno", id: 1, active: false },
  { sound: new Audio(audio2), theme: "Beat", id: 2, active: false },
  { sound: new Audio(audio3), theme: "Guitar`s base", id: 3, active: false },
  { sound: new Audio(audio4), theme: "Country guitar", id: 4, active: false },
  { sound: new Audio(audio5), theme: "Drums", id: 5, active: false },
  { sound: new Audio(audio6), theme: "Cocunuts BMX", id: 6, active: false },
  { sound: new Audio(audio7), theme: "Aliens", id: 7, active: false },
  { sound: new Audio(audio8), theme: "80s", id: 8, active: false },
  { sound: new Audio(audio9), theme: "Spooky", id: 9, active: false },
];
function App() {
  const [allInstrumentsStates, setAllInstrumentsStates] = useState(audioClips);

  return (
    <>
    <div className='contianer'>

      <h1 className="headline">
        <strong>Welcome to Looper App:</strong>
      </h1>
      <div className="App container">
        <ButtonPad
          allInstrumentsStates={allInstrumentsStates}
          />
      </div>
          </div>
    </>
  );
}

export default App;
