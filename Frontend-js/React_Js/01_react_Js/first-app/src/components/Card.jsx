import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='cards'>
        <img src={props.pics} alt="" width={300}
        style={{border:'2x solid black'}}/>
      <h2>{props.tittle}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card;
