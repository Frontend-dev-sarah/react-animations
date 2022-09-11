import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "Backrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];
  return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;
