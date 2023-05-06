import React from "react";
import { Modal, Button } from "react-bootstrap";

const AlertModal = ({ show, onHide }) => {
  const styleAlert = {
    backgroundColor: "#082837",
    color: "#e9f08e",
    borderRadius: "10px",
    border: "solid 4px  #4f9693",
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      style={{ backgroundColor: "#082837a3" }}
    >
      <div style={styleAlert}>
        <Modal.Header>
          <Modal.Title>You haven't assigned any task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Atleast Provide The Title!</Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} style={{ backgroundColor: "#4f9693" }}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default AlertModal;
