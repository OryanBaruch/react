import React from "react";
import PauseCircle from "./PauseCircle";
import PlayCircle from "./PlayCircle";
import "./buttons.css";
import Button from '@material-ui/core/Button';

const PlayPauseAll = ({ toggleAll , player}) => {

  //check playet for changeing the button to play or pause.
  const handleToggleAll = () => {
    !player? toggleAll(): toggleAll()
  };

  return (
    <div>
      <Button className='playPauseAll' variant="contained" color="primary"
      onClick={handleToggleAll}
      >
        {!player ? <PlayCircle /> : <PauseCircle />}
      </Button>
    </div>
  );
};

export default PlayPauseAll;
