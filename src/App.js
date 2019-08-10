import React, { Component } from 'react';
import ClickCard from "./components/clickCards/index";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title/index";
import './App.css';
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    score: 0,
    guesses: [],
    guessMessage: "",
    highScore: 0
  }

  randomizeCards = () => {
    let newOrder = [];
    newOrder = this.state.characters.sort(() => 0.5 - Math.random());
    this.setState({ characters: newOrder });
  };

  handleGuess = (guessId) => {
      if (this.state.guesses.includes(guessId)) {
        this.setState({
          guesses: [],
          guessMessage: "Sorry!",
          score: 0
        });
      } else {
        this.setState({
          guesses: this.state.guesses.concat(guessId),
          guessMessage: "Correct!",
          score: this.state.score + 1
        });
        if (this.state.score + 1 >= this.state.highScore) {
          this.setState({highScore: this.state.score + 1});
        };
      };
      this.randomizeCards();
  };

    render() {
    return (
      <div className="App row">
        <Title guessMessage={this.state.guessMessage} score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          {this.state.characters.map(character => <ClickCard {...character} handleGuess={this.handleGuess} />)}
        </Wrapper>
      </div>
    );
  }
}

export default App;
