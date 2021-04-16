import React, { useEffect, useState } from 'react';
import { BookContainer } from './Articles.styles';
import Card from './Card';
import ReactPaginate from 'react-paginate';

function Articles() {
  const [articlesCollections, setArticlesCollections] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setisLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);

  const URL = `https://content-store.explore.bfi.digital/api/articles?page=${currentPage}`;

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
  return (
    <>
      <BookContainer className="container">
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
    </>
  );
}

export default Articles;
