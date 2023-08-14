//new book constructor
function Book(title, author, pages) {
  this.title = title;
  this.authour = author;
  this.pages = pages;
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

  return new Book(newTitle, newAuthor, pages);
}

//push new book to library on click
document.getElementById('push').addEventListener('click', () => {
  myLibrary.push(addBookToLibrary());
  console.log(myLibrary);
});

//has the book been read?

//FIX THIS!!!
function isRead(){
  let isChecked = document.querySelector('.read');
  let readDisplay = document.querySelector('.read-display');
  let toggle = false;

  isChecked.addEventListener('click', ()=>{
    if(toggle === false){
      readDisplay.textContent = 'I\'ve read it';
      toggle = true;
    }

    isChecked.addEventListener('click', ()=>{
      if(toggle === true){
        readDisplay.textContent = 'No, not yet';
        toggle = false;
      }
     });
  });
}

isRead();









