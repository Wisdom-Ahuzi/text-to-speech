import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
const Main = () => {
  const speechSynthesis = useRef(window.speechSynthesis);
  const textArea = useRef(null);
  const [disabledTextArea, setDisabledTextArea] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedVoiceId, setSelectedVoiceId] = useState(null);

  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());
  }, []);

  const handlePlay = () => {
    const text = textArea.current.value;
    if (speechSynthesis.current.paused && speechSynthesis.current.speaking) {
      return speechSynthesis.current.resume();
    }
    if (selectedVoice) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.voice = window.speechSynthesis
        .getVoices()
        .find((voice) => voice.name === selectedVoice);
      window.speechSynthesis.speak(msg);
    }

    setDisabledTextArea("disabled");
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.current.speak(utterance);

    utterance.addEventListener("end", () => {
      setDisabledTextArea("");
    });
  };

  const handleStop = () => {
    speechSynthesis.current.cancel();
  };

  const handlePause = () => {
    speechSynthesis.current.pause();
  };

  const handleChangeVoice = (voice) => {
    console.log(voice.name);
    setSelectedVoice(voice.name);
  };
  return (
    <main className="Main">
      <div>
        <section id="section-one">
          <h1>Hello {localStorage.getItem("name")} !</h1>
          <h4>Welcome to speechify? Type in words you'd like to hear.</h4>
        </section>
        <section id="section-two">
          <textarea ref={textArea} id={disabledTextArea}></textarea>
          <section className="buttons-section">
            <button onClick={handlePlay}>
              {" "}
              <FontAwesomeIcon icon={faPlay} size="lg" />
            </button>
            <button onClick={handlePause}>
              {" "}
              <FontAwesomeIcon icon={faPause} size="lg" />
            </button>
            <button onClick={handleStop}>
              {" "}
              <FontAwesomeIcon icon={faStop} size="lg" />
            </button>
          </section>
        </section>
        <section className="buttons-section">
          <p>Want to talk faster? </p>
          <input type="number" min=".5" max="3" step=".5" />
        </section>
      </div>
      <aside>
        <h3>Don't Like current Voice? </h3>
        {voices.map((voice) => (
          <span
            id={selectedVoiceId}
            key={uuidv4()}
            onClick={() => {
              handleChangeVoice(voice);
              setSelectedVoiceId("selected");
            }}
          >
            {voice.name}
          </span>
        ))}
      </aside>
    </main>
  );
};

export default Main;
