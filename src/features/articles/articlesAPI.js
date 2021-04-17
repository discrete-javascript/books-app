/**
 * Summary: Fetch call to get the api results.
 * @param {string}   URL         urL for the get the call to get the results.
 * @return {promise} promises to be resolved in the createAsyncThunk.
 */

export async function fetchArticle(URL) {
  return await fetch(URL)
    .then((response) => response.json())
    .then((body) => body)
    .catch((error) => console.error('Error', error));
}
