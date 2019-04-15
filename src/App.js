import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import Game from "./components/Game";
import images from "./data/images";
import EndModal from "./components/EndModal";

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

    if (this.state.chosenImgs.includes(id)) {
      this.setState({
        showModal: true
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        chosenImgs: this.state.chosenImgs.concat(id),
        images: this.shuffleImgs()
      }, () => {
        if (this.state.chosenImgs.length === images.length) {
          this.setState({
            showModal: true
          });
        }
      });
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
        />
        <Game
          images={this.state.images}
          handleClick={this.handleImageClick}
        />
        <EndModal
          score={this.state.score}
          imageAmount={this.state.images.length}
          showModal={this.state.showModal}
          handleRestartClick={this.handleRestartClick}
        />
      </Fragment>
    );
  }
}

export default App;
