import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import Game from "./components/Game";
import images from "./data/images";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./style.css";

class App extends Component {
  state = {
    score: 0,
    chosenImgs: [],
    showModal: false,
    images: this.shuffleImgs()
  }

  shuffleImgs() {
    const imgArr = images.slice();
    const randomArr = [];

    for (let i = imgArr.length; i > 0; i--) {
      let rand = Math.floor(Math.random() * i);
      randomArr.push(imgArr[rand]);
      imgArr.splice(rand, 1);
    }
    return randomArr;
  };

  handleImageClick = event => {
    const id = parseInt(event.target.getAttribute("data-id"));

    if (this.state.chosenImgs.length < images.length) {
      if (this.state.chosenImgs.includes(id)) {
        this.setState({
          showModal: true
        });
      } else {
        this.setState({
          score: this.state.score + 1,
          chosenImgs: this.state.chosenImgs.concat(id)
        }, () => {
          if (this.state.chosenImgs.length === images.length) {
            this.setState({
              showModal: true
            });
          }
        });
      }
      this.setState({ images: this.shuffleImgs() });
    }
  };

  handleRestartClick = () => {
    this.setState({
      score: 0,
      showModal: false,
      chosenImgs: [],
      images: this.shuffleImgs()
    });
  };

  render() {
    return (
      <Fragment>
        <Header
          score={this.state.score}
          length={images.length}
          handleClick={this.handleRestartClick}
        />
        <Container>
          <Game
            images={this.state.images}
            handleClick={this.handleImageClick}
          />
        </Container>

        <Modal show={this.state.showModal} onHide={this.handleRestartClick}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {this.state.chosenImgs.length < this.state.images.length ? (
              <Fragment>
                <h3>Game over!</h3>
                <p>Score: {this.state.score}</p>
              </Fragment>
            ) : (
              <h3>You win!</h3>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="mx-auto">
              <Button variant="primary" onClick={this.handleRestartClick}>
                Play Again!
              </Button>
            </div>
          </Modal.Footer>
        </Modal>

      </Fragment>
    );
  }
}

export default App;
