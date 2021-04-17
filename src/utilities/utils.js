/**
 * Summary: Extract the author name and join with (,).
 * @param {array}   authors  author as an array of values.
 * @return {string} authors name in a string format.
 */
export function extractAuthor(authors) {
  if (authors?.length) {
    return authors.map((author) => author.name).join(', ');
  }
}

/**
 * Summary: Modify the data according to react select .
 * @param {array}   arr  actual data which we got from the api.
 * @return {array} modified array wrt to react-select.
 */

export function createReactSelectKeys(arr) {
  return arr.map((key) => ({
    value: key.id,
    label: key.name,
  }));
}

/**
 * Summary: to construct the url to call the api.
 * @param {object}   data  contains author: typeof string, type: typeof string as an object.
 * @return {string} returns modified url based on the selected values from the filterd dropdown.
 */

export function urlConstructor(data) {
  const ultimateURL = 'https://content-store.explore.bfi.digital/api/articles';
  let { author, type } = data;
  if (author === '' && type === '') {
    return ultimateURL;
  } else if (type !== '' && author !== '') {
    const bothEncodedUri = `${ultimateURL}?author=${encodeURIComponent(
      author
    )}&type=${encodeURIComponent(type)}`;
    return bothEncodedUri;
  } else if (author !== '') {
    const authorEncodeUri = `${ultimateURL}?author=${encodeURIComponent(
      author
    )}`;
    return authorEncodeUri;
  } else if (type !== '') {
    const typeEncodUri = `${ultimateURL}?type=${encodeURIComponent(type)}`;
    return typeEncodUri;
  }
}
