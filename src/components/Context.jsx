import React, { createContext } from "react";
import { useSpeechRecognition } from "react-speech-recognition";

export const AContext = createContext();
const Context = ({ children }) => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  return (
    <AContext.Provider
      value={{
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition,
      }}
    >
      {children}
    </AContext.Provider>
  );
};

export default Context;
