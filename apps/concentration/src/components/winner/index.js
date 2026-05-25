import React from 'react';
import './winner.scss';


export default ( { numberOfTries, visible, resetTheBoard } ) => {
  return (
    <div className={`winning-board ${ visible ? 'show-winning' : ''}`}>
    <div className="pyro">
      <div className="before"></div>
      <div className="after"></div>
    </div>
      <h1>Congratulations!</h1>
      <p>You cleared the board in { numberOfTries } tries.</p>
      <p><button onClick={ resetTheBoard }>Play Again</button></p>
    </div>
  )
}
