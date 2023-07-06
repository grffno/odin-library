let bookContainer = document.querySelector('.book-container');
const newBookBtn = document.querySelector('.newbook');
const submitBtn = document.querySelector('.submit');
const form = document.querySelector('.book-form');
form.style.display = 'none';


let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    console.log(book);
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const ul = document.createElement('ul');
    bookCard.appendChild(ul);

    const title = document.createElement('li');
    title.innerHTML = `Title: ${book.title}`;
    ul.appendChild(title);

    const author = document.createElement('li');
    author.innerHTML = `Author: ${book.author}`
    ul.appendChild(author);

    const pages = document.createElement('li');
    pages.innerHTML = `Page: ${book.pages}`;
    ul.appendChild(pages);

    const isRead = document.createElement('li');
    isRead.innerHTML = `Read?: ${book.isRead}`
    ul.appendChild(isRead);

    const isReadBtn = document.createElement('button');
    isReadBtn.textContent = 'Read?';
    isReadBtn.addEventListener('click', () => {
        if (book.isRead === 'Read') {
            isRead.remove();
            book.isRead = 'Not Read'
            isRead.innerHTML = `Read?: ${book.isRead}`
            ul.appendChild(isRead);
        } else {
            isRead.remove();
            book.isRead = 'Read'
            isRead.innerHTML = `Read?: ${book.isRead}`
            ul.appendChild(isRead);
        }
    });

    const removeBookBtn = document.createElement('button');
    removeBookBtn.textContent = "Remove Book";
    removeBookBtn.addEventListener('click', () => {
        bookCard.remove();
    });

    bookCard.appendChild(isReadBtn);
    bookCard.appendChild(removeBookBtn);
    bookContainer.appendChild(bookCard);
}

const book1 = new Book('Lord of The Flies', 'William Golding', '224', 'Read')
const book2 = new Book('Ulysses', 'James Joyce', '732', 'Not Read');

addBookToLibrary(book1);
addBookToLibrary(book2);

newBookBtn.addEventListener('click', () => {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('title').value;
    const authorInput = document.getElementById('author').value;
    const pagesInput = document.getElementById('pages').value;
    const isReadInput = document.getElementById('isRead').value;
    addBookToLibrary(new Book(titleInput, authorInput, pagesInput, isReadInput));
});