import React from 'react';
import cx from 'classnames';
import { BookContainer } from './Articles.styles';
import Card from './Card';
import data from './data.json';

function Articles() {
  const handleCardOpen = (e) => {
    if (
      e.target.classList.contains('open') &&
      e.target.classList.contains('card')
    ) {
      e.target.classList.remove('open');
    } else {
      e.target.classList.add('open');
    }
  };

  const getCards = () => {
    return data.data.map((card, index) => {
      return <Card {...card} handleCardOpen={handleCardOpen} />;
    });
  };
  return (
    <BookContainer className="container">
      <div className="list flex-column bookscontent">{getCards()}</div>
    </BookContainer>
  );
}

export default Articles;
