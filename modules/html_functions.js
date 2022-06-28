export const booksList = document.getElementById("books-list");
const contactInfoSection = document.getElementById("contact-info");
const inputFormSection = document.getElementById("input-form");
const awesomeBooksSection = document.getElementById("awesome-books");
export const showListButton = document.getElementById("show-list-button");
export const addNewButton = document.getElementById("add-new-button");
export const contactInfoButton = document.getElementById("contact-info-button");

export const displayNewElement = (book, library) => {
  // Shows the added book in html
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const removeButton = document.createElement("button");
  removeButton.classList.add(
    "remove-button",
    "col-2",
    "mt-1",
    "btn",
    "btn-danger",
    "btn-sm"
  );
  removeButton.textContent = "Remove";
  const bookStore = document.createElement("div");
  bookStore.classList.add(
    "book-store",
    "col-12",
    "border",
    "px-3",
    "px-lg-5",
    "mt-3"
  );

  bookStore.innerHTML = `
    <h2 class="book-title col-5">"${book.title}"</h2>
    <p class="book-author col-5 pt-2">by ${book.author}</p>
  `;

  bookStore.appendChild(removeButton);
  bookDiv.appendChild(bookStore);

  booksList.appendChild(bookDiv);

  removeButton.addEventListener("click", () => {
    library.removeBook(book);
    bookDiv.remove();

    if (library.books.length === 0) {
      booksList.innerHTML = `
        <p class="empty-library fw-bold text-center">No Books in the Library!</p>
      `;
    }
  });
};

const switchActive = (node) => {
  if (showListButton !== node && showListButton.classList.contains("active")) {
    showListButton.classList.remove("active");
  } else if (
    addNewButton !== node &&
    addNewButton.classList.contains("active")
  ) {
    addNewButton.classList.remove("active");
  } else if (
    contactInfoButton !== node &&
    contactInfoButton.classList.contains("active")
  ) {
    contactInfoButton.classList.remove("active");
  }
  node.classList.add("active");
};

export const showBooksList = () => {
  switchActive(showListButton);
  awesomeBooksSection.style.display = "flex";

  contactInfoSection.style.display = "none";
  inputFormSection.style.display = "none";
};

export const showListButtonListener = (event) => {
  event.preventDefault();
  showBooksList();
};

export const addNewButtonListener = (event) => {
  event.preventDefault();
  switchActive(addNewButton);
  inputFormSection.style.display = "flex";

  contactInfoSection.style.display = "none";
  awesomeBooksSection.style.display = "none";
};

export const contactInfoButtonListener = (event) => {
  event.preventDefault();
  switchActive(contactInfoButton);
  contactInfoSection.style.display = "flex";

  awesomeBooksSection.style.display = "none";
  inputFormSection.style.display = "none";
};
