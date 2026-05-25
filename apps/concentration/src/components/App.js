import React, { Component } from 'react';
import ConcentrationBoard from './concentrationboard';
import './app.scss';

export default class App extends Component {
  state = {
    numberOfTries: 0,
    numberOfMatches: 0,
    numberOfCelebrities: 0
  }

  setNumberOfTries = ( numberOfTries ) => {
    this.setState( { numberOfTries } );
  }
  setNumberOfMatches = ( numberOfMatches ) => {
    this.setState( { numberOfMatches } );
  }
  setNumberOfCelebrities = ( numberOfCelebrities ) => {
    this.setState( { numberOfCelebrities } );
  }
  resetCounts = ( numberOfTries, numberOfMatches, numberOfCelebrities ) => {
    this.setState( {
      numberOfTries,
      numberOfMatches,
      numberOfCelebrities
    } )
  }

  render(){
    return (
      <div className="App container-fluid">
        <header>
          <div className="intro">
            <p>Test your memory with...</p>
            <h2>The Celebrity</h2>
            <h1>Concentration Game</h1>
          </div>
          <div className="score-board">
            <h5>Your Score</h5>
            <p>Number of tries: <span>{ this.state.numberOfTries }</span></p>
            <p>Number of matches: <span>{ this.state.numberOfMatches }/{ this.state.numberOfCelebrities }</span></p>
          </div>
        </header>
        <ConcentrationBoard
          setNumberOfTries = { this.setNumberOfTries }
          setNumberOfMatches = { this.setNumberOfMatches }
          setNumberOfCelebrities = { this.setNumberOfCelebrities }
          numberOfTries = { this.state.numberOfTries }
          numberOfMatches = { this.state.numberOfMatches }
          resetCounts = { this.resetCounts }
        />
      </div>
    );
  }
}
