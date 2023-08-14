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

  console.log(myLibrary);

  displayBook();
});

//display books function 
function displayBook(){
  let pageContainer = document.querySelector('.page-wrapper');

  let card = document.createElement('div');
  card.classList.add('card');
  
  let bookContainer = document.createElement('section');
  bookContainer.classList.add('book-cards')
  pageContainer.appendChild(bookContainer);
  bookContainer.appendChild(card);
  

  let bookTitle = document.createElement('p');
  let bookAuthor = document.createElement('p');
  let bookPages = document.createElement('p');
  let bookReadStatus = document.createElement('p');

  myLibrary.forEach(book => {
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `${book.pages} pages`;
    bookReadStatus.textContent = `Book is read: [${book.isRead}]`;

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookReadStatus);

    let userInputForm = document.querySelector('form');
    userInputForm.style.cssText = 'display: none';
  });
}