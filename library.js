<<<<<<< HEAD
const myLibrary = [{
    title: "L'Etranger",
    author: "Albert Camus",
    pages: 191,
    isRead: true,
    isLiked: true
}/* ,{
    title:"La Peste",
    author: "Albert Camus", 
    pages: 341, 
    isRead: false, 
    isLiked: undefined
}, */];

function Book(title, author, pages, isRead, isLiked) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.isLiked = isLiked
    this.changeRead = function(boolean) {
        if (boolean === true) {
            this.isRead = 'true';
            }
        else this.isRead === 'false';
        booksHTML = ''
        createHTML();
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const laPeste = new Book ("La Peste","Albert Camus", 341, "not read", "unknown")

addBookToLibrary(laPeste)

let booksHTML = document.querySelector('#books-collection-container')


function createHTML() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let read, liked
        if (book.isRead === 'true') {
            read = 'This book has been read.'
        } else {
            read = 'This book has not been read.'
        }
        console.log(i,book)
        booksHTML.innerHTML += `
        <div class="book-container">
            <div class="book-title-author-container">
                <div class="book-title">${book.title}</div> -
                <div class="book-author">${book.author}</div>
            </div>
            <div class="book-description">
                <div class="book-pages">Length: ${book.pages} pages</div>
                <div class="book-is-read">${read}</div>
                <div class="book-is-liked">${book.isLiked}</div>
            </div>
        </div>
        `
    }
}


createHTML();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector('.show-dialog-button');
const closeButton = document.querySelector("dialog button");
const form = document.querySelector('.modal-form-container')

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    console.log(formProps)
})

form.addEventListener('click', function(e) {
   console.log(1)
=======
const myLibrary = [];

function Book(name, author, image, pageCount) {
  // the constructor...
  this.bookName = name,
  this.author = author,
  this.image = image
  this.pageCount = pageCount,
  this.idCode = crypto.randomUUID()
}

const etranger = new Book("L'Etranger","Albert Camus", 'images/camus-etranger.jpg',159);
const book1984 = new Book('1984','Georges Orwell','images/1984-orwell.jpg',376);

function addBookToLibrary(book) {
  // take params, create a book then store it in the array
    myLibrary.push(book);
    console.log(myLibrary);
}

addBookToLibrary(etranger);
addBookToLibrary(book1984);

function removeBookFromLibrary(book) {
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index,1);
}

const documentContent = document.getElementById('content');

myLibrary.forEach(function (book) {
    let card = document.createElement('div');
    card.classList.add('card');

    let imageNameAuthorContainer = document.createElement('div');
    imageNameAuthorContainer.classList.add('image-name-author-container');

    let nameAuthorContainer = document.createElement('div');
    nameAuthorContainer.classList.add('name-author-container');

    let cardBookName = document.createElement('div');
    cardBookName.classList.add('card-book-name');
    cardBookName.textContent = book.bookName;

    let cardBookAuthor = document.createElement('div');
    cardBookAuthor.classList.add('card-book-author');
    cardBookAuthor.textContent = book.author;

    let cardImage = document.createElement('img');
    cardImage.classList.add('book-image');
    cardImage.src = book.image;

    let cardBookPageCount = document.createElement('div');
    cardBookPageCount.classList.add('card-book-page-count');
    cardBookPageCount.textContent = `Page count: ${book.pageCount}`;

    nameAuthorContainer.appendChild(cardBookName);
    nameAuthorContainer.appendChild(cardBookAuthor);
    imageNameAuthorContainer.appendChild(cardImage);
    imageNameAuthorContainer.appendChild(nameAuthorContainer)
    card.appendChild(imageNameAuthorContainer)
    card.appendChild(cardBookPageCount);

    documentContent.appendChild(card);
>>>>>>> 7ec92bbf888cb14d050a2aaf6c45a64830e815a5
})