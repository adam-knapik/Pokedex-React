import React from 'react';
import { BiHealth } from 'react-icons/bi';
import { BsFillShieldFill } from 'react-icons/bs';
import { SiSpeedtest } from 'react-icons/si';
import { GiBroadsword } from 'react-icons/gi';

function Card(props) {
  return (
    <div className='card'>
        <img className='card__image' src={props.img} alt='Pokemon' />
        <h2 className='card__title'>{props.title} #{props.id}</h2>
        <p className='card_description'>{props.description}</p>
        <ul className='card__info'>
            <li>Type:
              <ul className='card__type'>
                {props.type}
              </ul>
            </li>
            <li>Height: {props.height}</li>
            <li>Weight {props.weight}</li>
            <li>Stats:
              <ul className='card__stats'>
                <li><BiHealth style={{color: 'green'}} /> HP: {props.hp}</li>
                <li><GiBroadsword style={{color: 'red'}} /> Attack: {props.attack}</li>
                <li><BsFillShieldFill style={{color: 'dodgerblue'}} /> Defense: {props.defense}</li>
                <li><SiSpeedtest style={{color: 'royalblue'}} /> Speed: {props.speed}</li>
                <li><GiBroadsword style={{color: 'gold'}} /> Special attack: {props.specialAttack}</li>
                <li><BsFillShieldFill style={{color: 'gold'}} /> Special defense: {props.specialDefense}</li>
              </ul>
            </li>
        </ul>       
    </div>
  )
}

export default Card;