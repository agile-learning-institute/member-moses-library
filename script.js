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

