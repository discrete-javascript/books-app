import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
  authorsAsync,
  typesAsync,
  getAllAuthors,
  getAllTypes,
  filterArticleCollectionAsync,
} from '../articles/articlesSlice';
import { createReactSelectKeys, urlConstructor } from '../../utilities/utils';
import { ModalBodyContainer } from './Modal.styles';

const AUTHOR = 'AUTHOR';
const TYPE = 'TYPE';

function ModalBody() {
  const dispatch = useDispatch();
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const authorsURL = `https://content-store.explore.bfi.digital/api/authors`;
  const typesURL = `https://content-store.explore.bfi.digital/api/types`;

  useEffect(() => {
    dispatch(authorsAsync(authorsURL));
    dispatch(typesAsync(typesURL));
  }, [authorsURL, dispatch, typesURL]);

  const authors = useSelector(getAllAuthors);
  const types = useSelector(getAllTypes);

  const modAuthorKey = createReactSelectKeys(authors.data);
  const modTypesKey = createReactSelectKeys(types.data);

  /**
   * Summary: select the respective values.
   * @param {object}   e contains property (.)value and set the property author and type.
   * @return no return value.
   */
  const handleSelect = (e, select) => {
    if (select === AUTHOR) {
      if (e) {
        setSelectedAuthor(e.value);
      } else {
        setSelectedAuthor('');
      }
    } else {
      if (e) {
        setSelectedType(e.value);
      } else {
        setSelectedType('');
      }
    }
  };

  /**
   * Summary: contruct the url based on author and type selected.
   * Dispatches the filterArticleCollectionAsync for calling setting up aricleCollections in the store.
   * @param no params.
   * @return no return value.
   */

  const handleFilter = () => {
    const getUrl = urlConstructor({
      author: selectedAuthor,
      type: selectedType,
    });

    dispatch(filterArticleCollectionAsync(getUrl));
  };

  return (
    <ModalBodyContainer>
      <div>
        Filter by author
        <Select
          isClearable
          isSearchable
          name="color"
          options={modAuthorKey}
          onChange={(e) => handleSelect(e, AUTHOR)}
        />
      </div>
      <div>
        Filter by article types
        <Select
          isClearable
          isSearchable
          name="color"
          options={modTypesKey}
          onChange={(e) => handleSelect(e, TYPE)}
        />
      </div>
      <div>
        <button
          disabled={!(selectedAuthor || selectedType)}
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
    </ModalBodyContainer>
  );
}

export default ModalBody;
