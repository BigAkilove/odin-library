const myLibrary = [];

function Book(title, author, pages, read, liked) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = read;
    this.readSentence = 'a';
    this.isLiked = liked;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const lEtranger = new Book("L'étranger", 'Albert Camus', 191, true, "Yes.");
const laPeste = new Book ("La Peste","Albert Camus", 341, false, "Not finished.");

addBookToLibrary(lEtranger);
addBookToLibrary(laPeste);

let booksHTML = document.querySelector('#books-collection-container');


function createHTML() {
    booksHTML.innerHTML = ''

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
            <div id="name-close-button-container">
                <div class="book-title-author-container">
                    <div class="book-title">${book.title}</div> -
                    <div class="book-author">${book.author}</div>
                </div>
                <button data-id=${book.id}>X</button>
            </div>
            <div class="book-description">
                <div class="book-pages">Length: ${book.pages} pages</div>
                <div class="book-is-read">${book.readSentence}</div>
                <button class="switch-read-button" data-id=${book.id}>Switch read</button>
                <div class="book-is-liked">Liked: ${book.isLiked}</div>
            </div>
        </div>
        `
    }
}

createHTML();

function getDatafromForm () {
    const arrayData = Array.from(document.querySelectorAll('#book-dialog form input'));

    let formData = [];

    arrayData.forEach(element => {
        let currentBook = {
            id : element.id,
            value : element .value
        }
        formData.push(currentBook)
    }); 

    const newBook = new Book(formData[0].value,formData[1].value,formData[2].value);
    addBookToLibrary(newBook);
    createHTML();
    removeBook();
    switchRead();
}

const bookDialog = document.querySelector('#book-dialog');

const dialogButton = document.querySelector('#show-dialog-button');
dialogButton.addEventListener('click', () => {
    bookDialog.showModal();
})

const dialogCloseButton = document.querySelector('#dialog-close-button');
dialogCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    getDatafromForm();
    bookDialog.close();
})

function removeBook () {
    const allBooks = document.querySelectorAll('.book-container div button');
    allBooks.forEach((button) => {
    button.addEventListener('click',(event) => {
        let idOfButton = event.target.attributes[0].value;

        myLibrary.forEach((book) => {
            if (idOfButton === book.id) {
                const index = myLibrary.indexOf(book);
                myLibrary.splice(index,1);
                createHTML();
                removeBook();
                switchRead();
            }
        })
    })
    }
)}

removeBook()

function switchRead () {
    const allReadButtons = document.querySelectorAll('.switch-read-button');
    allReadButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            let idOfButton = event.target.attributes[1].value;
            console.log(idOfButton)

            myLibrary.forEach((book) => {
                if (idOfButton === book.id) {
                    book.changeRead();
                }
            })
        })
    })
}

switchRead();

Book.prototype.changeRead = function () {

    if (this.isRead === true) {
        this.isRead = false;
        this.readSentence = "Not read.";
        createHTML();
        switchRead();
    } else if (this.isRead === false) { 
        this.isRead = true;
        this.readSentence = 'Read.';
        createHTML();
        switchRead();
    }
    console.log(this.isRead);
}