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
})