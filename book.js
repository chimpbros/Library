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

// iterate over the array and populate table
const table = document.querySelector('.table tbody');
function createNewRow(book, index) {
    const row = document.createElement('tr');
    const titleCol = document.createElement('td');
    const authorCol = document.createElement('td');
    const pagesCol = document.createElement('td');
    const readCol = document.createElement('td');
    const removeCol = document.createElement('td');
    const removeBtn = document.createElement('button');

    titleCol.textContent = book.title;
    authorCol.textContent = book.author;
    pagesCol.textContent = book.pages;
    readCol.textContent = book.read;
    removeBtn.textContent = 'remove';

    removeCol.appendChild(removeBtn);

    // create data attribute that corresponds to the index of the current book
    row.setAttribute('data-index', `${index}`);
    console.log(row.outerHTML);
    // add listener to the remove button 

    row.appendChild(titleCol);
    row.appendChild(authorCol);
    row.appendChild(pagesCol);
    row.appendChild(readCol);
    row.appendChild(removeCol);
    table.appendChild(row);
}
myLibrary.forEach(createNewRow);

const showBtn = document.getElementById('show-dialog');
const addBookDialog = document.getElementById('add-book');
const cancelBtn = document.getElementById('cancel-btn');

// add event listener to open dialog box
showBtn.addEventListener('click', () => {
    addBookDialog.showModal();
});

// close the dialog when user click cancel button
cancelBtn.addEventListener('click', () => {
    addBookDialog.close();
});

// add new book to mylibrary array based on user input
const newBookForm = document.getElementById('new-book-form');
newBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTitle = document.getElementById('title');
    const newAuthor = document.getElementById('author');
    const newPages = document.getElementById('pages');
    const newStatus = document.getElementsByName('read-status');
    let readStatus = '';
    newStatus.forEach((status) => {
        if(status.checked){
            readStatus = status.value;
        }
    });
    addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, readStatus);
    createNewRow(myLibrary[myLibrary.length - 1]);
    addBookDialog.close();
});


