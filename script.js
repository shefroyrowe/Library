//---------------------------------------------/
//---------new book constructor--------------//
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

//--------------------/
//book storage array//
let myLibrary = [];

//--------------------------------------------------------------/
//create book function----------------------------------------//
function createBook() {
  newTitle = document.getElementById('form-title').value;
  newAuthor = document.getElementById('form-author').value;
  pages = document.getElementById('form-pages').value;
  isRead = document.getElementById('cb5').checked;

  return new Book(newTitle, newAuthor, pages, isRead);
}

//-----------------------------------------------------------/
//'display book' function----------------------------------//
function displayBook() {

  //get container element to hold the book divs//
  let bookContainer = document.querySelector('.book-cards');

  //create a div to propagate with book details//
  let card = document.createElement('div');
  card.classList.add('card');

  //create 'p' elements to hold book details//
  let bookTitle = document.createElement('p');
  let bookAuthor = document.createElement('p');
  let bookPages = document.createElement('p');
  let bookReadStatus = document.createElement('p');

  //create delete btn, change read status btn ad a dive to hold them//
  let cardButtonWrapper = document.createElement('div');
  cardButtonWrapper.classList.add('card-btn-wrap');

  let deleteBook = document.createElement('button');
  deleteBook.classList.add('delete-book');

  let changeRead = document.createElement('button');
  changeRead.classList.add('change-read-status');

  //append details to each card element// 
  myLibrary.forEach(book => {
    //append details  to 'p' elements// 
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `pages: ${book.pages}`;
    bookReadStatus.textContent = `Book is read: [- ${book.isRead} -]`;
    deleteBook.textContent = 'Delete';
    changeRead.textContent = 'Change read';

    //append 'p' elements to .card/div element//
    card.append(bookTitle);
    card.append(bookAuthor);
    card.append(bookPages);
    card.append(bookReadStatus);
    //data attribute to locate books index//
    card.setAttribute("data-index", myLibrary.indexOf(book));

    //append buttons to card/div element//
    cardButtonWrapper.append(deleteBook);
    cardButtonWrapper.append(changeRead);
    card.append(cardButtonWrapper);

    //append book div to book container element//
    bookContainer.appendChild(card);

    //get form element and set it to hide on submit//
    let userInputForm = document.querySelector('form');
    userInputForm.style.cssText = 'display: none;';

    //'Remove books' from library event listener//
    deleteBook.addEventListener('click', () => {

      let bookIndex = cardButtonWrapper.parentElement.getAttribute('data-index');
      card.remove();
      myLibrary.splice(bookIndex);
    });

    //change read status on book//
    Book.prototype.switchRead = () => {
      changeRead.addEventListener('click', () => {
        if (book.isRead === true) {
          book.isRead = false;
          myLibrary.isRead = false;
          bookReadStatus.textContent = `Book is read: [- ${book.isRead} -]`;

        } else if (book.isRead === false) {
          book.isRead = true;
          myLibrary.isRead = true;
          bookReadStatus.textContent = `Book is read: [- ${book.isRead} -]`;
        }

      });
    }
    book.switchRead(); //'switch read status method' call

  });
}

//--------------------------------------------------------------------------//
//push new book to library on click-----------------------------------------/
//stop after eight books are added----------------------------------------//
document.getElementById('push').addEventListener('click', () => {
  myLibrary.push(createBook());

  if (myLibrary.length <= 8) {
    displayBook(); //function call (display book)
  }
});

//--------------------------------------------------------------------------------------------------//
//get 'new book' button and display user input form onclick of form 'go' button---------------------/
//'cancel form' is an inner function--------------------------------------------------------------//
function displayForm() {
  let userInputForm = document.querySelector('form');

  document.querySelector('.new-book-btn').addEventListener('click', () => {
    userInputForm.style.cssText = 'display: unset;';
  });

  //'cancel form' inner function//
  function cancelForm() {

    //get cancel button and bind to click event to hiode form//
    document.getElementById('cancel').addEventListener('click', () => {
      userInputForm.style.cssText = 'display: none;';
    });
  }
  cancelForm(); //'cancel form' inner function call
}
displayForm(); //function call

//-------------------------------------------------------------------------------//
//clear all library items function-----------------------------------------------/
function clearAll() {
  document.querySelector('.clear-all-btn').addEventListener('click', () => {

    //get book containing html element
    let bookContainer = document.querySelector('.book-cards');

    //delete all array elements
    myLibrary.length = 0;

    //delete all books being displayed
    bookContainer.textContent = '';
  });
}
clearAll(); //function call

//ADD PAGE TAB ICON