import React from 'react';
import ConcentrationBoard from '../concentrationboard';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

const isRandomized = ( originalArray, randomArray ) => {
  const originalType = Object.prototype.toString.call(originalArray);
  const randomType = Object.prototype.toString.call(randomArray);
  if( originalType !== '[object Array]' ||
      originalType !== randomType ||
      originalArray.length !== randomArray.length ){
    return false;
  }
  randomArray.forEach( (el, index)=> {
    if( el !== originalArray[index] ) {
      return true;
    }
  })

  return true;
}



it('returns a randomized array', ()=> {
  const wrapper = shallow(
    <ConcentrationBoard
      setNumberOfTries = { ()=>{} }
      setNumberOfMatches = { ()=>{} }
      setNumberOfCelebrities = { ()=>{} }
      numberOfTries = {0 }
      numberOfMatches = { 0 }
      resetCounts = { ()=>{} }
    />
  );
  const instance = wrapper.instance();
  let originalArray = [1,2,3,4];
  let randomArray = instance.getRandomCelebrities( originalArray, originalArray.length );
  expect(isRandomized(originalArray, randomArray)).toEqual( true );
});
