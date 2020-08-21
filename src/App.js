import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { Button } from 'semantic-ui-react'



export default class App extends React.Component {

state = {   
  gameVersion: null,
  displayGame: false
};

handleClickBase = () => {
  this.setState(state => ({
    gameVersion: "base",
    displayGame: true
  }));
}

handleClickExpansion = () => {
  this.setState(state => ({
    gameVersion: "expansion",
    displayGame: true
  }));
}

componentDidMount() {
  this.setState(state => ({
    gameVersion: null,
    displayGame: false
  }));
}

render() {
  return (
    <div className="App">
      <Button onClick={this.handleClickBase} disabled={this.state.displayGame}>Base Game</Button>
      <Button onClick={this.handleClickExpansion} disabled={this.state.displayGame}>5-6 Player Expansion</Button>
      {this.state.displayGame &&
      <Board version={this.state.gameVersion} />
    }
    </div>
    
  );
}

}

