// Array
let library = [];

//Book Object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function info(book) {
    if (book.read) {
        return `${book.title} by ${book.author} - ${book.pages} pages - already read`;
    } else {
        return `${book.title} by ${book.author} - ${book.pages} pages - not read yet`;
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
    displayBook();
})

// Other buttons
const removeBook = (e) => {
    let i = e.target.parentNode.dataset.index;
    library.splice(i, 1);
    e.target.parentNode.remove();
}  

const readBook = (e) => {
    let i = e.target.parentNode.dataset.index;
    if (library[i].read) {
        library[i].read = false;
    } else {
        library[i].read = true;
    }
    e.target.parentNode.firstChild.textContent = info(library[i]);
}

// Add to Library
function addToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let book = new Book(title, author, pages, read);
    library.push(book);
}

// Display All Books
function displayBook() {
    // update 
    let allBooks = document.querySelectorAll(".row");
    let DOMLen = allBooks.length;
    for (let i = 0; i < DOMLen; ++i) {
       allBooks[i].dataset.index = i;
    }
    // display
    let length = library.length;
    let table = document.querySelector(".table");
    let div = document.createElement("div");
    let pgh = document.createElement("p");
    div.dataset.index = length - 1;
    div.classList.add("row");
    pgh.textContent = info(library[length-1]);
    let remove = document.createElement("button");
    let read = document.createElement("button");
    remove.textContent = "delete";
    read.textContent = "change read status";
    remove.onclick = removeBook;
    read.onclick = readBook;
    div.appendChild(pgh);
    div.appendChild(remove);
    div.appendChild(read);
    table.appendChild(div);
}