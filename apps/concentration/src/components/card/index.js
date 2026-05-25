import React from 'react';
import './card.scss';

export default ( { celebrity, index, flipMe, activeCards, matchedCards } ) => {
  const flippedCardStyle = ()=> {
    if( activeCards.indexOf( index ) > -1  ){
      return 'flipped';
    } else if ( matchedCards[celebrity] ){
      return 'flipped matched';
    }
    return '';
  }
  return (
    <div className="card-holder col-4 col-sm-3 col-md-2 col-xl-1">
      <div className={`flip-card ${ flippedCardStyle() }`}>
       <div className="flip-card-inner">
         <div className="flip-card-front" onClick={ ()=> flipMe( celebrity, index ) }>
          <img src="images/cardback.png" alt="" />
         </div>
         <div className="flip-card-back">
          <img src={ `images/star_images/${ celebrity }`} alt=""  />
         </div>
       </div>
      </div>
    </div>
  )
}
