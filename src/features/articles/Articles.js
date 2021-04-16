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
} from './articlesSlice';

function Articles() {
  const articlesCollections = useSelector(getArticleCollections);
  const pageCount = useSelector(getTotal);
  const isLoaded = useSelector(getIsLoaded);
  const [currentPage, setcurrentPage] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

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

  const handleShowOverlay = (toggle) => {
    setShowOverlay(toggle);
  };
  return (
    <>
      <BookContainer className="container">
        <button
          className="filter-button"
          onClick={() => handleShowOverlay(true)}
        >
          Filter
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
          <div>loading...</div>
        )}
      </BookContainer>
      <Modal show={showOverlay} handleShowOverlay={handleShowOverlay} />
    </>
  );
}

export default Articles;
