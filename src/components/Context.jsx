import React, { createContext, useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";

export const AContext = createContext();
const Context = ({ children }) => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [data, setData] = useState([]);
    const [to, setTo] = useState("hi");
    const [output, setOutput] = useState("");

  useEffect(() => {
    fetch("https://translator-server-beryl.vercel.app/languages")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <AContext.Provider
      value={{
        transcript,
        setTo,
        to,
output, setOutput,
        data,
        resetTranscript,
        browserSupportsSpeechRecognition,
      }}
    >
      {children}
    </AContext.Provider>
  );
};

export default Context;
