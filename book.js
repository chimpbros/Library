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
    this.toggleReadStatus = function(){
        if(this.read){
            this.read = false;
        }
        else{
            this.read = true;
        }
    };
}

// add book to myLibrary array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return myLibrary;
}

addBookToLibrary('Hyperion cantos', 'Dan simmon', 563, true);
addBookToLibrary('12 Rules for Life', 'Jordan Peterson', 763, true);

// iterate over the array and populate table
const table = document.querySelector('.table tbody');
function createNewRow(book) {
    const row = document.createElement('tr');
    const titleCol = document.createElement('td');
    const authorCol = document.createElement('td');
    const pagesCol = document.createElement('td');
    const readCol = document.createElement('td');
    const readDiv = document.createElement('div');
    const removeCol = document.createElement('td');
    const removeBtn = document.createElement('button');

    titleCol.textContent = book.title;
    authorCol.textContent = book.author;
    pagesCol.textContent = book.pages;
    readDiv.textContent = book.read ? 'read' : 'not read';
    removeBtn.textContent = 'remove';
    removeBtn.classList.add('remove-btn');

    readDiv.classList.add('status-div');
    readCol.appendChild(readDiv);
    removeCol.appendChild(removeBtn);

    // add listener to the remove button
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        row.remove();
    });

    // add listener to status col
    readDiv.addEventListener('click', () => {
        book.toggleReadStatus();
        readDiv.textContent = book.read ? 'read' : 'not read';
    });

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
    newBookForm.reset();
});

// add new book to mylibrary array based on user input
const newBookForm = document.getElementById('new-book-form');
newBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTitle = document.getElementById('title');
    const newAuthor = document.getElementById('author');
    const newPages = document.getElementById('pages');
    const newStatus = document.getElementsByName('read-status');
    const titleError = document.getElementById('name-error');
    const authorError = document.getElementById('author-error');
    const pagesError = document.getElementById('pages-error');
    let validForm;
    let readStatus;
    newStatus.forEach((status) => {
        if(status.checked){
            readStatus = true;
        }
    });
    if(newTitle.value === '' || newTitle.value == null){
        titleError.textContent = 'title can\'t be blank';
        validForm = false;
    }
    else{
        validForm = true;
        titleError.textContent = '';
    }
    if(newAuthor.value === '' || newAuthor.value == null){
        authorError.textContent = 'author can\'t be blank';
        validForm = false;
    }
    else{
        validForm = true;
        authorError.textContent = '';
    }
    if(newPages.value === '' || newPages.value == null || isNaN(newPages.value) || newPages.value <= 0){
        pagesError.textContent = 'enter a valid number';
        validForm = false;
    }
    else{
        validForm = true;
        pagesError.textContent = '';
    }
    if(validForm){
    addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, readStatus);
    createNewRow(myLibrary[myLibrary.length - 1]);
    newBookForm.reset();
    addBookDialog.close();
    }
});


