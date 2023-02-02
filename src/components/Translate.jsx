import React, { useContext } from "react";
import { AContext } from "./Context";

const Translate = () => {
  const { data, setTo, output, resetTranscript } = useContext(AContext);
  return (
    <div>
      <select
        onChange={(e) => setTo(e.target.value)}
        className="select select-info"
      >
        {data?.map((language) => (
          <option key={language.name} value={language.code}>
            {language?.name}
          </option>
        ))}
      </select>
      <textarea
        value={output}
        className="textarea textarea-info w-full h-96 text-lg"
        placeholder="हिंदी..."
      ></textarea>
      <div className="text-center">
        <button className="btn btn-accent" onClick={resetTranscript}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Translate;
