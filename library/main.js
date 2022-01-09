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

let library = [];

const harry = new Book("Harry", "Rowling", 243, true);
const potts = new Book("Potts", "Rowling", 249, false);


// query selectors
const image = document.querySelector(".image");
const header = document.querySelector("h1");
const body = document.querySelector("body");
const interface = document.querySelector(".interface");
const button = document.querySelector(".button");
const wrapIntr = document.querySelector(".wrapUI");
const wrapForm = document.querySelector(".wrapForm");
const submit = document.getElementById("submit");

// make remove button
const remove = document.createElement("button");
remove.textContent = "remove";

// change read status
const readStatus = document.createElement("button");
readStatus.textContent = "change read status";


// event listeners

button.addEventListener('click', () => {
    if (library.length == 0) {
        image.remove();
        header.style.margin = "0px";
        button.style.margin = "0px";
        interface.classList.add("update");
    }
    wrapForm.style.display = "flex";
    button.style.display = "none";
})

submit.addEventListener("click", function(event) {
    event.preventDefault(); // PREVENTS FORM FROM AUTO SUBMITTING
    addToLibrary();
    wrapForm.style.display = "none";
    button.style.display = "flex";
    displayBooks();
})


function addToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let book = new Book(title, author, pages, read);
    library.push(book);
}

function displayBooks() {
    let len = library.length;
    let div = document.createElement("div");
    div.dataset.index = len;
    div.classList.add("row");
    div.appendChild(remove);
    div.appendChild(readStatus);
    div.textContent = library[len-1].info();
    body.appendChild(div);
}