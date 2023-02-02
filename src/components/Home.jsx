import React from "react";
import Listening from "./Listening";
import ToSpeech from "./ToSpeech";
import Translate from "./Translate";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Listening />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <ToSpeech />
        <Translate />
      </div>
    </div>
  );
};

export default Home;
