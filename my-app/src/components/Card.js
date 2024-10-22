import React from 'react';
import '../styles/Card.css';

function Card({ img, title, professor }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{professor}</p>
        <button>❤️</button>
      </div>
    </div>
  );
}

export default Card;