import React from 'react';

function DisplaySimpson({ simpson }) {
  return (
    simpson && (
        <div className='DisplaySimpson'>
          <img src={simpson.image} alt={simpson.character} />
          <ul>
            <li>Character: {simpson.character}</li>
            <li> Quote : {simpson.quote}  </li>
            <li>Character Direction: {simpson.characterDirection}</li>
          </ul>
        </div>
    ))
}

export default DisplaySimpson;

