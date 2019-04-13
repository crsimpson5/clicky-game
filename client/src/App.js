import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import Game from "./components/Game";
import images from "./data/images";

class App extends Component {
  state = {
    score: 0,
    chosenImgs: [],
    images: this.shuffleImgs()
  }

  shuffleImgs() {
    const imgArr = images.slice();
    const randomArr = [];
    
    for (let i = imgArr.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * i);
      randomArr.push(imgArr[rand]);
      imgArr.splice(rand, 1);
    }
    return randomArr;
  }

  handleImageClick = event => {
    const id = parseInt(event.target.getAttribute("data-id"));

    if (this.state.chosenImgs.length < images.length) {
      if (this.state.chosenImgs.includes(id)) {
        this.setState({
          score: 0,
          chosenImgs: []
        });
      } else {
        this.setState({
          score: this.state.score + 1,
          chosenImgs: this.state.chosenImgs.concat(id)
        });
      }

      this.setState({ images: this.shuffleImgs() });
    }
  };

  handleRestartClick = () => {
    this.setState({
      score: 0,
      chosenImgs: []
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
        <Game 
          images={this.state.images} 
          handleClick={this.handleImageClick} 
        />
      </Fragment>
    );
  }
}

export default App;
