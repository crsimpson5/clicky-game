import React, { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import gifs from "../../data/gifs";

const EndModal = props => {
  const displayGif = () => {
    let src = "";

    if (props.score <= 4) {
      src = gifs.fail;
    } else if (props.score <= 6) {
      src = gifs.whatever;
    } else if (props.score < props.imageAmount) {
      src = gifs.nice;
    } else {
      src = gifs.dance;
    }
    
    return <img src={src}></img>
  }

  return (
    <Modal show={props.showModal} onHide={props.handleRestartClick}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {props.score < props.imageAmount ? (
          <Fragment>
            <h3>Game over!</h3>
            <p>Score: {props.score}</p>
            {displayGif()}
          </Fragment>
        ) : (
          <Fragment>
            <h3>You win!</h3>
            {displayGif()}
          </Fragment>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={props.handleRestartClick}>
            Play Again!
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EndModal;