/** @format */

import axios from "axios";
import React, { useContext, useState } from "react";
import { AContext } from "./Context";

const ToSpeech = () => {
  const [from, setFrom] = useState("en");
//   const [input, setInput] = useState("");
  const { transcript, to, data, setOutput } = useContext(AContext);

const translate = (e) => {
        e.preventDefault();
        const input = e.target.inputs?.value;
        // console.log(input)

    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "ecf43096-7fe6-4d83-a32f-55da4d2ab1be");

    axios
      .post("https://libretranslate.com/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => setOutput(res.data.translatedText));
  };
  return (
    <div>
      <select
        onChange={(e) => setFrom(e.target.value)}
        className="select select-info"
      >
        {data?.map((language) => (
          <option key={language.name} value={language.code}>
            {language?.name}
          </option>
        ))}
      </select>
      <form onSubmit={translate}>
        <textarea
          name="inputs"
          className="textarea textarea-info w-full h-96 text-lg"
          value={transcript}
          placeholder="Listening english..."
        ></textarea>
        <div className="text-center">
          
          <button className="btn btn-accent" >
            Translate
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToSpeech;
