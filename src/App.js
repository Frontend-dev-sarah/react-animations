import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const showModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };
  return (
    <div className="App">
      <h1>React Animations</h1>
      <button className="Button" onClick={() => setShowBlock((pre) => !pre)}>
        Toggle
      </button>

      <br />
      {console.log(showBlock)}
      <Transition
        in={showBlock} //`in` determines whether the component should show or not
        timeout={300}
        mountOnEnter //if `in` is true, add the component to the dom
        unmountOnExit
        onEnter={() => console.log("onEnter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("onEntered")}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
      >
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              opacity: state === "exiting" || state === "entering" ? 0 : 1,
              transition: "opacity 1s ease-out",
            }}
          ></div>
        )}
      </Transition>
      <Transition
        mountOnEnter
        unmountOnExit
        in={modalIsOpen}
        timeout={animationTiming}
      >
        {(state) => <Modal show={state} closed={closeModal} />}
      </Transition>

      {modalIsOpen && <Backdrop show={modalIsOpen} />}
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
