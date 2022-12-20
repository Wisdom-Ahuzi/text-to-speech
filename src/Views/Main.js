import React from "react";

const Main = () => {
  return (
    <div>
      Main
      <p>Name - {localStorage.getItem("name")}</p>
    </div>
  );
};

export default Main;
