// A mock function to mimic making an async request for data
export async function fetchArticle(URL) {
  return await fetch(URL)
    .then((response) => response.json())
    .then((body) => body)
    .catch((error) => console.error('Error', error));
}
