export function extractAuthor(authors) {
  if (authors?.length) {
    return authors.map((author) => author.name).join(', ');
  }
}

export function createReactSelectKeys(arr) {
  return arr.map((key) => ({
    value: key.id,
    label: key.name,
  }));
}

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
