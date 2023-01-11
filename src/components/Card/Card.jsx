import React from 'react';

function Card(props) {
  return (
    <div className='card'>
        <img className='card__image' src={props.img} alt='Pokemon image' />
        <h2 className='card__title'>{props.title} # {props.id}</h2>
        <ul className='card__stats'>
            <li>Type:
              <ul className='card__type'>
                {props.type}
              </ul>
            </li>
            <li>Height: {props.height}</li>
            <li>Weight {props.weight}</li>
        </ul>       
    </div>
  )
}

export default Card;