//new book constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  /*method to log book details
  this.info = () => {
    return `${title} by: ${author}, ${pageCount} pages, has been read? ${isRead}`;
  }
  */
}

//book storing array
let myLibrary = [];

function addBookToLibrary() {
  newTitle = document.getElementById('form-title').value;
  newAuthor = document.getElementById('form-author').value;
  pages = document.getElementById('form-pages').value;
  isRead = document.getElementById('cb5').checked;

  return new Book(newTitle, newAuthor, pages, isRead);
}

//push new book to library on click
document.getElementById('push').addEventListener('click', () => {
  myLibrary.push(addBookToLibrary());

  displayBook(); //function call
});

//display book function 
function displayBook() {
  //get container element to hold the book divs
  let bookContainer = document.querySelector('.book-cards');

  //create a div to propagate with book details
  let card = document.createElement('div');
  card.classList.add('card');

  //append book div to container element
  bookContainer.appendChild(card);

  //create 'p' elements to hold book details
  let bookTitle = document.createElement('p');
  let bookAuthor = document.createElement('p');
  let bookPages = document.createElement('p');
  let bookReadStatus = document.createElement('p');

  //append details  to 'p' elements 
  myLibrary.forEach(book => {
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `${book.pages} pages`;
    bookReadStatus.textContent = `Book is read: [${book.isRead}]`;

    //append 'p' elements to .card/div element
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookReadStatus);

    //get form element and set it to hide on submit
    let userInputForm = document.querySelector('form');
    userInputForm.style.cssText = 'transform: translateX(40rem); opacity: 0.0;';
  });
}

//get 'new book' button and display user input form onclick
function displayForm() {
  let userInputForm = document.querySelector('form');

  document.querySelector('.new-book-btn').addEventListener('click', () => {
    userInputForm.style.cssText = 'opacity: 1.0';
  });
}

displayForm(); //function call

//stop card creation after eight books





