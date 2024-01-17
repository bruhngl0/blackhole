import React from 'react';

function Audio() {
  let audio = new Audio("music.mp3")

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}>Play</button>
    </div >
  );
}

export default Audio;
;


