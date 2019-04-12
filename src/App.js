import React, { Component } from 'react';
import Header from "./components/Header";
import Game from "./components/Game";

class App extends Component {
  state = {
    score: 0,
    images: [
      {
        "id": 0,
        "path": "https://via.placeholder.com/150"
      },
      {
        "id": 1,
        "path": "https://via.placeholder.com/150"
      }
    ]
  }

  handleClick = event => {
    const { value } = event.target;
    
    const images = this.state.images.filter(image => image.id !== parseInt(value));
    console.log(event.target.value);
    this.setState({ images });
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
