const myLibrary = [];
let booksHTML = document.querySelector('#books-collection-container');

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookClass = class {
    constructor (title, author, pages, read = "false", liked = "Haven't read it yet") {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = read;
        this.readSentence = 'a';
        this.isLiked = liked;
        this.id = crypto.randomUUID();
    }
}

class classFunctions {
    createHTML() {  
        booksHTML.innerHTML = ''

        for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i];
            if (book.isRead === true) {
                book.readSentence = 'This book has been read.'
            } else {
                book.readSentence = 'This book has not been read.'
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

    getDatafromForm () {
        const arrayData = Array.from(document.querySelectorAll('#book-dialog form input'));

        let formData = [];

        arrayData.forEach(element => {
            let currentBook = {
                id : element.id,
                value : element .value
            }
            formData.push(currentBook)
        }); 

        const newBook = new bookClass(formData[0].value,formData[1].value,formData[2].value);
        addBookToLibrary(newBook);
        libraryFunctions.createHTML();
        libraryFunctions.removeBook();
        libraryFunctions.switchRead();
    }

    removeBook () {
        const allBooks = document.querySelectorAll('.book-container div button');
        allBooks.forEach((button) => {
        button.addEventListener('click',(event) => {
            let idOfButton = event.target.attributes[0].value;

            myLibrary.forEach((book) => {
                if (idOfButton === book.id) {
                    const index = myLibrary.indexOf(book);
                    myLibrary.splice(index,1);
                    libraryFunctions.createHTML();
                    libraryFunctions.removeBook();
                    libraryFunctions.switchRead();
                }
            })
        })
        }
    )}

    switchRead() {
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
}

const libraryFunctions = new classFunctions()

const bookDialog = document.querySelector('#book-dialog');
const dialogButton = document.querySelector('#show-dialog-button');
dialogButton.addEventListener('click', () => {
    bookDialog.showModal();
})

const dialogCloseButton = document.querySelector('#dialog-close-button');
dialogCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    libraryFunctions.getDatafromForm();
    bookDialog.close();
})

const lEtranger = new bookClass("L'étranger", 'Albert Camus', 191, true, "Yes.");
const laPeste = new bookClass("La Peste","Albert Camus", 341, false, "Not finished.");
addBookToLibrary(lEtranger);
addBookToLibrary(laPeste);
libraryFunctions.createHTML();
libraryFunctions.removeBook();
libraryFunctions.switchRead();

bookClass.prototype.changeRead = function () {

    if (this.isRead === true) {
        this.isRead = false;
        this.readSentence = "Not read.";
        libraryFunctions.createHTML();
        libraryFunctions.removeBook();
        libraryFunctions.switchRead();;
    } else if (this.isRead === false) { 
        this.isRead = true;
        this.readSentence = 'Read.';
        libraryFunctions.createHTML();
        libraryFunctions.removeBook();
        libraryFunctions.switchRead();;
    }
    console.log(this.isRead);
}