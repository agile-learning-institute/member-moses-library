const addBookBtn = document.querySelector(".add-book");
const addBookForm = document.querySelector(".overlay-cont");

const myLibrary = [];

function Book(title, author, pages, status) {
    this.tile = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return `The book '${this.tile}' by ${this.author}, ${this.pages} pages, ${this.status}.`;
    }
}


addBookBtn.addEventListener('click', function() {
    addBookForm.style.visibility = "visible";
});

addBookForm.addEventListener('click', function(e) {
    if (e.target === addBookForm) {
        addBookForm.style.visibility = "hidden";
    }
});