const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(this);
        return `${title} by ${author}, ${pages} pages, ${read}.`;
    }
}

// add book to myLibrary array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return myLibrary;
}

addBookToLibrary('Hyperion cantos', 'Dan simmon', 563, 'read');
addBookToLibrary('12 Rules for Life', 'Jordan Peterson', 763, 'read');