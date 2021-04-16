export function extractAuthor(authors) {
  if (authors?.length) {
    return authors.map((author) => author.name).join(', ');
  }
}
