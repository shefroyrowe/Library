//new book constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.authour = author;
  this.pages = pages;
  this.isRead = isRead;
  //method to log book details
  this.info = () => {
    return `${title} by: ${author}, ${pageCount} pages, has been read? ${isRead}`;
  }
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
});
