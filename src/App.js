import React, {Component} from 'react';
import ClickCard from "./components/clickCards";
import Wrapper from "./components/Wrapper/index"
import './App.css';
import characters from "./characters.json";

class App extends Component {
  state = {
    characters
  }

  render() {
    console.log(this.state.characters);
    return (
      <div className="App row">
        <Wrapper>
        {this.state.characters.map(character => <ClickCard {...character} key = {character.id} />)}
        </Wrapper>
      </div>
    );
  }
}

export default App;
