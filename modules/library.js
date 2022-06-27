import storageAvailable from './local_storage.js';

export default class Library {
  // Library class consists of a list of books
  books = [];

  constructor() {
    this.books = [];
    const localBooksData = localStorage.getItem('books');
    if (localBooksData) {
      this.books = JSON.parse(localBooksData);
    }
  }

  bookExists(book) {
    // Check if a book exists
    for (let i = 0; i < this.books.length; i += 1) {
      if (this.books[i].title === book.title && this.books[i].author === book.author) {
        return true;
      }
    }
    return false;
  }

  addBook(book) {
    // Adding a new book to list
    if (!this.bookExists(book)) {
      this.books.push(book);
      this.updateLocalStorage();
      return book;
    }
    // eslint-disable-next-line no-alert
    alert('The Book and Author exist');
    return null;
  }

  removeBook(book) {
    // Removing a book from the list
    for (let i = 0; i < this.books.length; i += 1) {
      if (this.books[i].title === book.title && this.books[i].author === book.author) {
        this.books.splice(i, 1);
        this.updateLocalStorage();
        return;
      }
    }
  }

  updateLocalStorage() {
    // Updating the localStorage
    if (storageAvailable('localStorage')) {
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }
}