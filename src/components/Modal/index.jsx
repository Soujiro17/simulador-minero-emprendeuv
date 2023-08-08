import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import Container from "./style";

const Modal = ({ height, width, children, setSelected }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === "modal-container") {
      setSelected(null);
    }
  };

  return ReactDOM.createPortal(
    <Container onClick={handleCloseModal} id="modal-container">
      <Card height={height} width={width}>
        {children}
      </Card>
    </Container>,
    document.getElementById("modal"),
  );
};

export default Modal;
