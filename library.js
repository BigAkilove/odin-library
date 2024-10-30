const myLibrary = [{
    title: "L'Etranger",
    author: "Albert Camus",
    pages: 191,
    isRead: "read",
    isLiked: "yes"
}];

function Book(title, author, pages, isRead, isLiked) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.isLiked = isLiked
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const laPeste = new Book ("La Peste","Albert Camus", 341, "not read", "unknown")

let booksHTML = document.querySelector('#books-container')


function createHTML() {
    for (let book, i = 1; i <= myLibrary.length; i++) {
        booksHTML.innerHTML += `<div>1</div>
        `
    }
}