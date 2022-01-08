function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let library = [];

const harry = new Book("Harry", "Rowling", 243, true);
const potts = new Book("Potts", "Rowling", 249, false);


const body = document.querySelector("body");
const image = document.querySelector(".image");
const button = document.querySelector(".button");

button.addEventListener('click', () => {
    image.remove();
    button.classList.add("right");
    addBook();
})


function addBook() {
    const form = document.createElement('form');
    body.appendChild(form);

    // labelsr
}