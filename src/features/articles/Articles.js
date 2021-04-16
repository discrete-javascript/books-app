import React from 'react';
import cx from 'classnames';
import { BookContainer } from './Articles.styles';

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
  return (
    <BookContainer className="container">
      <div className="list bookscontent">
        <div className="card flex-row" onClick={handleCardOpen}>
          <img
            src="http://i.harperapps.com/covers/9780008108298/y450-293.jpg"
            className="book"
          />
          <div className="flex-column info">
            <div className="title">The Fellowship of the Ring</div>
            <div className="author">J.R.R. Tolkien</div>
            <div className="hidden bottom summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ratione impedit temporibus maiores autem aperiam assumenda
              exercitationem, quisquam nobis esse.
            </div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button className="simple">Join</button>
            </div>
          </div>
        </div>
        <div className="card flex-row" onClick={handleCardOpen}>
          <img
            src="https://i.pinimg.com/originals/52/ec/12/52ec12f7dd324864949267c92cce2e43.jpg"
            className="book"
          />
          <div className="flex-column info">
            <div className="title">1984</div>
            <div className="author">George Orwell</div>
            <div className="hidden bottom summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ratione impedit temporibus maiores autem aperiam assumenda
              exercitationem, quisquam nobis esse.
            </div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button className="simple">Join</button>
            </div>
          </div>
        </div>
        <div className="card flex-row" onClick={handleCardOpen}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg"
            className="book"
          />
          <div className="flex-column info">
            <div className="title">To Kill a Mockingbird</div>
            <div className="author">Harper Lee</div>
            <div className="hidden bottom summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ratione impedit temporibus maiores autem aperiam assumenda
              exercitationem, quisquam nobis esse.
            </div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button className="simple">Join</button>
            </div>
          </div>
        </div>
        <div className="card flex-row" onClick={handleCardOpen}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/TheGreatGatsby_1925jacket.jpeg/220px-TheGreatGatsby_1925jacket.jpeg"
            className="book"
          />
          <div className="flex-column info">
            <div className="title">Great Gatsby</div>
            <div className="author">F Scott Fitzgerald</div>
            <div className="hidden bottom summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ratione impedit temporibus maiores autem aperiam assumenda
              exercitationem, quisquam nobis esse.
            </div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button className="simple">Join</button>
            </div>
          </div>
        </div>
        <div className="card flex-row" onClick={handleCardOpen}>
          <img
            src="http://i.harperapps.com/covers/9780008108298/y450-293.jpg"
            className="book"
          />
          <div className="flex-column info">
            <div className="title">The Fellowship of the Ring</div>
            <div className="author">J.R.R. Tolkien</div>
            <div className="hidden bottom summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ratione impedit temporibus maiores autem aperiam assumenda
              exercitationem, quisquam nobis esse.
            </div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button className="simple">Join</button>
            </div>
          </div>
        </div>
        <div className="card flex-row" onClick={handleCardOpen}>
          <img
            src="https://i.pinimg.com/originals/52/ec/12/52ec12f7dd324864949267c92cce2e43.jpg"
            className="book"
          />
          <div className="flex-column info">
            <div className="title">1984</div>
            <div className="author">George Orwell</div>
            <div className="hidden bottom summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ratione impedit temporibus maiores autem aperiam assumenda
              exercitationem, quisquam nobis esse.
            </div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button className="simple">Join</button>
            </div>
          </div>
        </div>
        <div className="card flex-row" onClick={handleCardOpen}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg"
            className="book"
          />
          <div className="flex-column info">
            <div className="title">To Kill a Mockingbird</div>
            <div className="author">Harper Lee</div>
            <div className="hidden bottom summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ratione impedit temporibus maiores autem aperiam assumenda
              exercitationem, quisquam nobis esse.
            </div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button className="simple">Join</button>
            </div>
          </div>
        </div>
        <div className="card flex-row" onClick={handleCardOpen}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/TheGreatGatsby_1925jacket.jpeg/220px-TheGreatGatsby_1925jacket.jpeg"
            className="book"
          />
          <div className="flex-column info">
            <div className="title">Great Gatsby</div>
            <div className="author">F Scott Fitzgerald</div>
            <div className="hidden bottom summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ratione impedit temporibus maiores autem aperiam assumenda
              exercitationem, quisquam nobis esse.
            </div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button className="simple">Join</button>
            </div>
          </div>
        </div>
      </div>
    </BookContainer>
  );
}

export default Articles;
