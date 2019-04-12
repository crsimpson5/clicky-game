import React, { Component } from 'react';
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

  handleClick = event => {
    const id = parseInt(event.target.getAttribute("data-id"));

    this.setState({ images: this.shuffleImgs() });
  };

  render() {
    return (
      <div>
        <Header 
          score={this.state.score} 
        />
        <Game 
          images={this.state.images} 
          handleClick={this.handleClick} 
        />
      </div>
    );
  }
}

export default App;
