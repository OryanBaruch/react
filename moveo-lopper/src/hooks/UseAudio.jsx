import { useState, useEffect } from "react";

const useAudio = (audio) => {
  const [sound] = useState(new Audio(audio));
  const [play, setPlay] = useState(false);

  const toggle = (otherCurrentTime) => {
    if (play) {
      sound.pause()
      setPlay(false)
    } else {
      setTimeout(() => {
        setPlay(true)
        sound.play()
        sound.loop=true
      }, 8000-otherCurrentTime);
    }
  };

  return [play, toggle, sound];
};

export default useAudio;
