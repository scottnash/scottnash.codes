import React, { Component } from 'react';
import Card from '../card';
import Data from '../../data';
import './concentrationboard.scss';
import Winner from '../winner';


export default class ConcentrationBoard extends Component {
  state = {
    celebrities: [],
    activeCards: [],
    matchedCards: {},
    numberOfCelebrities: 18,
    poolOfCelebritiesSize: Data.length,
    flipping: false
  }

  returnANumber = ()=> {
    return 20;
  }

  getRandomCelebrities( celebrities = Data, numberOfCelebrities = this.state.numberOfCelebrities ) {
    let tempCelebs = [...celebrities],
    tempCeleb = null,
    randomCelebrities = [];
    for( let x = 0; x < numberOfCelebrities; x++ ) {
      let randomElement = Math.floor(Math.random() * ( tempCelebs.length - x) );
      randomCelebrities[ x ] = tempCelebs[ randomElement ];
      tempCeleb = tempCelebs[ tempCelebs.length - ( 1 + x ) ];
      tempCelebs[ tempCelebs.length - ( 1 + x )] = randomCelebrities[ x ];
      tempCelebs[ randomElement ] = tempCeleb;
    }

    return randomCelebrities;
  }

  componentWillMount() {
    this.resetTheBoard();
  }

  resetTheBoard = () => {
    this.setState( { activeCards: [], matchedCards: [] }, ()=> {
      this.props.resetCounts( 0, 0, this.state.numberOfCelebrities );
      let celebs = Data.slice( 0, this.state.poolOfCelebritiesSize );
      let uniqueCelebs = this.getRandomCelebrities( celebs ); // random celebrities
      let doubledCelebs = this.getRandomCelebrities( [...uniqueCelebs, ...uniqueCelebs], uniqueCelebs.length * 2 ); // make 2 of every celeb so you can match them, and randomly shuffle them
      this.setState( { celebrities: doubledCelebs } );
    });
  }

  renderCards(){
    return this.state.celebrities.map( ( celebrity, index )=> {
      return (
        <Card
          key={ celebrity + index  }
          celebrity={ celebrity }
          index={ index }
          flipMe={ this.flipMe }
          activeCards={ this.state.activeCards }
          matchedCards={ this.state.matchedCards }
        />
      );
    });
  }

  render() {
    return (
      <div className={`row no-gutters concentration-board ${ this.getMatchedClass() }`}>
        <Winner
          numberOfTries = { this.props.numberOfTries }
          visible = { this.state.numberOfCelebrities === this.props.numberOfMatches }
          resetTheBoard = { this.resetTheBoard }
        />
        { this.renderCards() }
      </div>
    )
  }

  flipMe = ( celebrity, cardIndex ) => {
    if( !this.state.flipping && !this.state.matchedCards[cardIndex] && this.state.activeCards.length < 2 ) {
      this.setState( { flipping: true }, ()=> {
        let activeCards = [ ...this.state.activeCards, cardIndex ];
        this.setState( { activeCards: activeCards }, this.checkForMatchingPair );
        window.setTimeout( ()=> {
          this.setState( { flipping: false } );
        }, 500 )
      });
    }
  }

  checkForMatchingPair = () => {
    if( this.state.activeCards.length === 2 && this.state.celebrities[ this.state.activeCards[ 0 ] ] === this.state.celebrities[ this.state.activeCards[ 1 ] ] ) {
      this.setState( {
        matchedCards: {
          ...this.state.matchedCards,
          [this.state.celebrities[ this.state.activeCards[ 0 ] ]]: true
        },
        activeCards: [],
        numberOfTries: this.state.numberOfTries + 1,
        numberOfMatches: this.state.numberOfMatches + 1
      }, ()=> {
        this.props.setNumberOfTries( this.props.numberOfTries + 1 );
        this.props.setNumberOfMatches( this.props.numberOfMatches + 1 );
      } );
    } else if( this.state.activeCards.length === 2 ){
      window.setTimeout( ()=> {
        this.setState( { activeCards: [] }, ()=> {
          this.props.setNumberOfTries( this.props.numberOfTries + 1 );
        } );
      }, 2000 )
    }
  }

  getMatchedClass = () => {
    if ( this.props.numberOfMatches === this.state.numberOfCelebrities ) {
      return 'game-complete';
    }
    return '';
  }
}
