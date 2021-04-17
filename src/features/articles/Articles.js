import React, { useEffect } from 'react';
import { BookContainer } from './Articles.styles';
import Card from './Card';
import ReactPaginate from 'react-paginate';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  articleAsync,
  getArticleCollections,
  getCurrentPage,
  getIsLoaded,
  getTotal,
  toggleOverlay,
  setCurrentPage,
  getIsFiltered,
  getApiUrl,
  toggleIsFiltered,
} from './articlesSlice';

function Articles() {
  const articlesCollections = useSelector(getArticleCollections);
  const pageCount = useSelector(getTotal);
  const isLoaded = useSelector(getIsLoaded);
  const currentPage = useSelector(getCurrentPage);
  const isFiltered = useSelector(getIsFiltered);
  const apiUrl = useSelector(getApiUrl);

  const dispatch = useDispatch();

  let URL = `https://content-store.explore.bfi.digital/api/articles?page=${
    currentPage + 1
  }`;

  useEffect(() => {
    if (isFiltered) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      URL = `${apiUrl}&page=${currentPage + 1}`;
    }
  });

  useEffect(() => {
    dispatch(articleAsync(URL));
  }, [URL]);

  /**
   * Summary: Set the current page from the pagination.
   * @param {object}   selectedObject.selected is current page which we get from callback of react-paginate.
   * @return no return value.
   */
  const handlePageChange = (selectedObject) => {
    dispatch(setCurrentPage(selectedObject.selected));
  };

  /**
   * Summary: Creates the Card component from the articleCollections from the redux store.
   * @param {object}   no params.
   * @return {array} created Card components and returns the presentation card.
   */

  const getCards = () => {
    return articlesCollections.map((card) => {
      return <Card key={card.uuid} {...card} />;
    });
  };

  /**
   * Summary: dispatches toggleOverlay action to toggle the showOverlay from redux store value.
   * @param no params.
   * @return no return value.
   */
  const handleShowOverlay = () => {
    dispatch(toggleOverlay());
  };

  /**
   * Summary: Dispatches articleAsync call the fetchArticle API to get the all the articles.
   * @param no params.
   * @return no return value.
   */

  const handleClearFilter = () => {
    dispatch(
      articleAsync(
        'https://content-store.explore.bfi.digital/api/articles?page=1'
      )
    );
    dispatch(setCurrentPage(0));
    dispatch(toggleIsFiltered(false));
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
