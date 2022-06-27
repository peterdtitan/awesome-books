const inputAuthor = document.querySelector('.input-books-author');
const inputTitle = document.querySelector('.input-books-title');
const bookContainer = document.querySelector('.awesome-books');
const addBook = document.querySelector('.add-books');

// empty library array for storing book as object
const library = JSON.parse(localStorage.getItem('books') || '[]');

// existing entries
const existingEntries = JSON.parse(localStorage.getItem('books') || '[]');

// Update User Interface dynamically

const updateUI = () => {
  bookContainer.innerHTML = '';
  library.forEach((data, i) => {
    const bookSelf = document.createElement('div');
    bookSelf.classList.add('bookItem');
    const newBookTitle = document.createElement('p');
    newBookTitle.textContent = `${data.title}`;
    const newBookAuthor = document.createElement('p');
    newBookAuthor.textContent = `${data.author}`;
    const button = document.createElement('button');
    button.textContent = 'Remove';
    const separator = document.createElement('hr');

    // remove books from library
    const removeBook = function () {
      library.splice(this, 1);
      localStorage.setItem('books', JSON.stringify(library));
      updateUI(library);
    };

    button.addEventListener('click', removeBook.bind(i));

    bookSelf.appendChild(newBookTitle);
    bookSelf.appendChild(newBookAuthor);
    bookSelf.appendChild(button);
    bookSelf.appendChild(separator);

    bookContainer.appendChild(bookSelf);
  });
};

updateUI();
// add new books to library

addBook.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputAuthor.value && inputTitle.value) {
    const book = { author: inputAuthor.value, title: inputTitle.value };
    library.push(book);
    updateUI(library);
    inputAuthor.value = '';
    inputTitle.value = '';
    existingEntries.push(book);
    localStorage.setItem('books', JSON.stringify(existingEntries));
  }
});
