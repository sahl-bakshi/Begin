function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info() = () => {
    let info;
    info += title + " by " + author + ", " + pages + ", ";
    (info) ? info += "read" : info += "not read";
    return info;
}

let library = [];

