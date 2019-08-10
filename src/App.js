import React, { Component } from 'react';
import ClickCard from "./components/clickCards/index";
import Wrapper from "./components/Wrapper/index"
import './App.css';
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    score: 0,
    guesses: [],
    guessMessage: ""
  }

  randomizeCards = () => {
    let newOrder = [];
    newOrder = this.state.characters.sort(() => 0.5 - Math.random());
    this.setState({ characters: newOrder });
  };

  handleGuess = (guessId) => {
    console.log("Handling Cards");
      if (this.state.guesses.includes(guessId)) {
        console.log("Wrong!");
        this.setState({
          guesses: [],
          guessMessage: "You guessed wrong!",
          score: 0
        });
      } else {
        console.log("YASSS!");
        this.setState({
          guesses: this.state.guesses.concat(guessId),
          guessMessage: "You guessed Correctly!",
          score: this.state.score + 1
        });
      };
      this.randomizeCards();
  };

    render() {
    return (
      <div className="App row">
        <Wrapper>
          {this.state.characters.map(character => <ClickCard {...character} handleGuess={this.handleGuess} />)}
        </Wrapper>
      </div>
    );
  }
}

export default App;
