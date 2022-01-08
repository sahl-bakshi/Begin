function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let library = [];

//const potter = new Book("Potter", "Rowling", 243, true);


const body = document.querySelector("body");
const theGIF = document.querySelector(".image");
const button = document.querySelector(".button");


button.addEventListener('click', () => {
    theGIF.remove();
    addBook();
})


function addBook() {
    const form = document.createElement('form');
    body.appendChild(form);
    
    
}