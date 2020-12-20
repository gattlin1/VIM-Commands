import React from 'react';
import './Card.scss';

type CardProps = {
  command: string;
  description: string;
};

function Card(props: CardProps) {
  return (
    <div className='Card'>
      <h3>{props.command}</h3>
      <img src='{props.example}' alt='' />
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
