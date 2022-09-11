import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => prevState.concat(prevState.length + 1));
  };

  const removeItemHandler = (selIndex) => {
    setItems((prevState) =>
      prevState.filter((item, index) => index !== selIndex)
    );
  };

  const listItems = items.map((item, index) => (
    <CSSTransition
      key={index}
      unmountOnExit
      classNames="fade" // `fade`/-enter/enter-active/exit/exit-ative
      // className={{
      //   enter: "",
      //   enterActive: "ModalOpen",
      //   exit: "",
      //   exitActive: "ModalClosed",
      //   // appear:
      //   // appearActive:
      // }}
      timeout={300}
      onClick={() => removeItemHandler(index)}
    >
      <li className="ListItem"> {item}</li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup component="ul" className="List">
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
