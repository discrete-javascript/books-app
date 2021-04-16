import React, { useEffect, useState } from 'react';
import { BookContainer } from './Articles.styles';
import Card from './Card';
import ReactPaginate from 'react-paginate';
import Modal from '../modal/Modal';

function Articles() {
  const [articlesCollections, setArticlesCollections] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setisLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const URL = `https://content-store.explore.bfi.digital/api/articles?page=${
    currentPage + 1
  }`;

  useEffect(() => {
    function handleFetch() {
      setisLoaded(false);
      fetch(URL)
        .then((response) => response.json())
        .then((body) => {
          setArticlesCollections([...body.data]);
          setPageCount(body.meta.total);
          setisLoaded(true);
        })
        .catch((error) => console.error('Error', error));
    }
    handleFetch();
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
