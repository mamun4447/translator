import React, { useContext } from "react";
import { AContext } from "./Context";

const ToSpeech = () => {
  const { transcript, resetTranscript } = useContext(AContext);
  return (
    <div>
      <textarea
        className="textarea textarea-info w-full h-96 text-lg"
        value={transcript}
        placeholder="Listening english..."
      ></textarea>
      <button className="btn btn-accent" onClick={resetTranscript}>
        Reset
      </button>
    </div>
  );
};

export default ToSpeech;
