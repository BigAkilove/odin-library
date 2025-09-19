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
})