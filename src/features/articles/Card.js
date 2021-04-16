import React from 'react';
import { extractAuthor } from './utils';

function Card({ handleCardOpen, ...cardProps }) {
  console.log(cardProps);
  return (
    <div className="card flex-row" onClick={handleCardOpen}>
      <img
        src={cardProps.primary_image.url}
        className="book"
        lazy="loading"
        alt="book"
      />
      <div className="flex-column info">
        <div className="title">{cardProps.title}</div>
        <div className="author">{extractAuthor(cardProps?.authors)}</div>
        <div className="hidden bottom summary">{cardProps.summary}</div>
      </div>
    </div>
  );
}

export default Card;
