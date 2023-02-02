import React, { useContext, useState } from "react";
import { CiMicrophoneOff, CiMicrophoneOn } from "react-icons/ci";
import SpeechRecognition from "react-speech-recognition";
import { AContext } from "./Context";

const Listening = () => {
  const [micStatus, setMicStatus] = useState(true);
  const { browserSupportsSpeechRecognition } = useContext(AContext);

  const buttonStatus = (event) => {
    event.preventDefault();
    setMicStatus(!micStatus);
    if (micStatus) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
      <div
          title="Click to talk"
      className="flex justify-center items-center cursor-pointer p-10 my-4 shadow-2xl rounded-lg text-4xl"
      onClick={buttonStatus}
    >
      {micStatus ? <CiMicrophoneOn /> : <CiMicrophoneOff />}
    </div>
  );
};

export default Listening;
