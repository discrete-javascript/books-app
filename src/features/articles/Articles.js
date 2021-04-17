import React, { useEffect, useState } from 'react';
import { BookContainer } from './Articles.styles';
import Card from './Card';
import ReactPaginate from 'react-paginate';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  articleAsync,
  getArticleCollections,
  getIsLoaded,
  getTotal,
  toggleOverlay,
} from './articlesSlice';

function Articles() {
  const articlesCollections = useSelector(getArticleCollections);
  const pageCount = useSelector(getTotal);
  const isLoaded = useSelector(getIsLoaded);
  const [currentPage, setcurrentPage] = useState(0);

  const dispatch = useDispatch();

  const URL = `https://content-store.explore.bfi.digital/api/articles?page=${
    currentPage + 1
  }`;

  useEffect(() => {
    dispatch(articleAsync(URL));
  }, [URL]);

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected);
  };

  const getCards = () => {
    return articlesCollections.map((card) => {
      return <Card key={card.uuid} {...card} />;
    });
  };

  const handleShowOverlay = () => {
    dispatch(toggleOverlay());
  };

  const handleClearFilter = () => {
    dispatch(
      articleAsync(
        'https://content-store.explore.bfi.digital/api/articles?page=1'
      )
    );
  };

  return (
    <>
      <BookContainer className="container">
        <button className="filter-button" onClick={() => handleShowOverlay()}>
          Filter
        </button>
        <button className="clear-button" onClick={() => handleClearFilter()}>
          Clear Filter
        </button>
        <div className="list flex-column bookscontent">
          {isLoaded ? getCards() : <div>loading...</div>}
        </div>
        {articlesCollections.length === 0 ? (
          <button
            className="go-to-start"
            onClick={() => handlePageChange({ selected: 0 })}
          >
            No data found please click here go to start
          </button>
        ) : (
          ''
        )}
        {isLoaded ? (
          <ReactPaginate
            pageCount={pageCount}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={'container'}
            previousLinkClassName={'page'}
            breakClassName={'page'}
            nextLinkClassName={'page'}
            pageClassName={'page'}
            disabledClassNae={'disabled'}
            activeClassName={'active'}
            forcePage={currentPage}
          />
        ) : (
          <div></div>
        )}
      </BookContainer>
      <Modal />
    </>
  );
}

export default Articles;
