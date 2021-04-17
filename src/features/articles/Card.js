import React, { useState } from 'react';
import { extractAuthor } from '../../utilities/utils';
import cx from 'classnames';

function Card({ ...cardProps }) {
  const [open, setOpen] = useState(false);
  const handleCardOpen = (e) => {
    setOpen(!open);
  };

  const cardClassName = cx('card flex-row', { open });
  return (
    <div className={cardClassName} onClick={handleCardOpen}>
      <img
        src={cardProps.primary_image.url}
        className="book"
        loading="lazy"
        alt="book"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = './no-thumbnail.png';
        }}
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
