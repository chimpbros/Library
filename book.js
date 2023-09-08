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

console.log(myLibrary);

const table = document.querySelector('.table tbody');

// iterate over the array and populate table
myLibrary.forEach((book) => {
    const row = document.createElement('tr');
    const titleCol = document.createElement('td');
    const authorCol = document.createElement('td');
    const pagesCol = document.createElement('td');
    const readCol = document.createElement('td');

    titleCol.textContent = book.title;
    authorCol.textContent = book.author;
    pagesCol.textContent = book.pages;
    readCol.textContent = book.read;

    row.appendChild(titleCol);
    row.appendChild(authorCol);
    row.appendChild(pagesCol);
    row.appendChild(readCol);
    table.appendChild(row);
});