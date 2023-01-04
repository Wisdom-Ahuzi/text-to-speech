import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
const Main = () => {
  const speechSynthesis = useRef(window.speechSynthesis);
  const textArea = useRef(null);
  const [disabledTextArea, setDisabledTextArea] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const speedRef = useRef(null);
  const sideBar = useRef(null);
  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());
  }, []);

  // useEffect(() => {
  //   const talk = new SpeechSynthesisUtterance(
  //     "Hello" + localStorage.getItem("name")
  //   );
  //   speechSynthesis.current.speak(talk);
  // }, []);

  setInterval(() => {
    if (!speechSynthesis.current.speaking) {
      setDisabledTextArea("");
    }
  }, 1000);

  const handlePlay = () => {
    const text = textArea.current.value;
    let utterance;

    if (speechSynthesis.current.paused && speechSynthesis.current.speaking) {
      return speechSynthesis.current.resume();
    }
    if (selectedVoice) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.rate = speedRef.current.value || 1;
      console.log(msg.rate);
      msg.voice = window.speechSynthesis
        .getVoices()
        .find((voice) => voice.name === selectedVoice);
      window.speechSynthesis.speak(msg);
    } else {
      utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speedRef.current.value || 1;
      console.log(utterance.rate);
      speechSynthesis.current.speak(utterance);
    }

    setDisabledTextArea("disabled");
  };

  const handleStop = () => {
    speechSynthesis.current.resume();
    speechSynthesis.current.cancel();
    setDisabledTextArea("");
  };

  const handlePause = () => {
    speechSynthesis.current.pause();
  };

  const handleChangeVoice = (voice, e) => {
    setSelectedVoice(voice.name);
    e.target.classList.toggle("coloured");
  };

  const handleCollapse = () => {
    if (sideBar.current.className === "collapse") {
      sideBar.current.classList.remove("collapse");
    } else {
      sideBar.current.classList.add("collapse");
    }
  };

  const handleTrash = () => {
    textArea.current.value = "";
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
            <button onClick={handlePlay} title="Play">
              {" "}
              <FontAwesomeIcon icon={faPlay} size="lg" />
            </button>
            <button onClick={handlePause} title="Pause">
              {" "}
              <FontAwesomeIcon icon={faPause} size="lg" />
            </button>
            <button onClick={handleStop} title="Stop">
              {" "}
              <FontAwesomeIcon icon={faStop} size="lg" />
            </button>
            <button onClick={handleTrash} id={disabledTextArea}>
              <FontAwesomeIcon icon={faTrash} title="Trash" id="trash" />
            </button>
          </section>
        </section>
        <section className="buttons-section-two">
          <p>Want to talk faster? </p>
          <input
            type="number"
            min=".5"
            max="3"
            step=".5"
            ref={speedRef}
            // placeholder={speedRef.current.value}
          />
        </section>
      </div>
      <aside ref={sideBar}>
        <h3>Don't Like current Voice? </h3>
        {voices.map((voice) => (
          <span
            key={uuidv4()}
            onClick={(e) => {
              handleChangeVoice(voice, e);
            }}
          >
            {voice.name}
          </span>
        ))}
      </aside>
      <span onClick={handleCollapse}>
        <img src={require("../assets/images/textToSpeechLogo.jpeg")} alt="" />
      </span>
    </main>
  );
};

export default Main;
