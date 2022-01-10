// Array
let library = [];

//Book Object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (read) {
            return `${this.title} by ${this.author}, ${this.pages} pages, already read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        }
    }
}

// Query Selectors
const BODY = document.querySelector("body");
const HEADER = document.querySelector("h1");
const ADD = document.querySelector(".add-button");
const GIF = document.querySelector(".image-GIF");
const GUI = document.querySelector(".gui");
const SUBMIT = document.querySelector("#submit");
const GUI_CONTAINER = document.querySelector(".gui-container");
const FORM_CONTAINER = document.querySelector(".form-container");

// Make Table
let TABLE_CONTAINER = document.createElement("div");
let TABLE = document.createElement("div");
TABLE_CONTAINER.classList.add("table-container");
TABLE.classList.add("table");
BODY.appendChild(TABLE_CONTAINER);
TABLE_CONTAINER.appendChild(TABLE);

// Event Listeners
ADD.addEventListener('click', () => {
    if (library.length == 0) {
        GIF.remove();
        GUI.classList.add("update");
        HEADER.style.margin = "0px";
        ADD.style.margin = "0px";
    }
    FORM_CONTAINER.style.display = "flex";
    TABLE_CONTAINER.style.display = "none";
    ADD.style.display = "none";
})

SUBMIT.addEventListener("click", function(event) {
    event.preventDefault(); // PREVENTS FORM FROM AUTO SUBMITTING
    addToLibrary();
    FORM_CONTAINER.style.display = "none";
    TABLE_CONTAINER.style.display = "flex";
    ADD.style.display = "flex";
    displayBooks();
})

// Add to Library
function addToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let book = new Book(title, author, pages, read);
    library.push(book);
}

// Display Books
function displayBooks() {
    let table = document.querySelector(".table");
    let length = library.length;
    let div = document.createElement("div");
    div.dataset.index = length - 1;
    div.classList.add("row");
    div.textContent = library[length-1].info();
    let remove = document.createElement("button");
    let read = document.createElement("button");
    remove.textContent = "remove";
    read.textContent = "read";
    div.appendChild(remove);
    div.appendChild(read);
    table.appendChild(div);
}