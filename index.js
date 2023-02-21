/* eslint-disable no-undef */

import setTime from './modules/pageDynamics.js';
import { Library, libraryContainer } from './modules/classBook.js';
import singlePage from './modules/classUI.js';

const form = document.getElementById('myForm');

// innitialize form submit to create Library instance
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 1000);
  const book = new Library(id, authorName.value, titleName.value);
  libraryContainer.push(book);
  Library.displayBooks();
  Library.clearInput();
  Library.deleteBook();
  Library.addLocalStorage(libraryContainer);
});
window.addEventListener('DOMContentLoaded', () => {
  Library.displayBooks();
  Library.deleteBook();
});
setTime();
singlePage();