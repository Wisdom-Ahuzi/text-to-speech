import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  let navigate = useNavigate();
  const [values, setvalues] = useState({
    name: "",
    error: "hide",
    focus: "",
  });
  const handleSubmittedName = (e) => {
    e.preventDefault();
    if (values.name === "") {
      setvalues((preValues) => {
        return { ...preValues, error: "show" };
      });
    } else {
      setvalues((preValues) => {
        return { ...preValues, name: "" };
      });
      navigate("/Main");
      localStorage.setItem("name", values.name);
    }
  };

  const handleFocus = () => {
    setvalues((preValues) => {
      return { ...preValues, focus: "move-arrow" };
    });
  };

  return (
    <main className="LandingPage">
      <section className="left-card-container">
        <div className="left-card-container-inner">
          <img src={require("../assets/images/textToSpeechLogo.jpeg")} alt="" />
          <div>
            <h1>WHERE TEXTS MEET SPEECH</h1>
            <p>
              Hello fellow shoppers! We are currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div>
              <small> Activate speech synthesis to continue</small>
              <input type="checkbox" />
            </div>
            <form onSubmit={(e) => handleSubmittedName(e)}>
              <div className="name-field">
                <input
                  type="text"
                  onClick={handleFocus}
                  placeholder="Enter Your Name..."
                  onChange={(e) => {
                    setvalues((preValues) => {
                      return { ...preValues, name: e.target.value };
                    });
                  }}
                  value={values.name}
                />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  onClick={handleSubmittedName}
                  className="icon"
                  id={values.focus}
                />
              </div>
              <span id={values.error}> Field cannot be empty!</span>
            </form>
          </div>
        </div>
      </section>
      <section className="right-card-image-container">
        <img src={require("../assets/images/rickandmorty.jpeg")} alt="" />
      </section>
    </main>
  );
};

export default LandingPage;
