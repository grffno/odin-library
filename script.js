let bookContainer = document.querySelector(".book-container");
const newBookBtn = document.querySelector(".newbook");
const submitBtn = document.querySelector(".submit");
const form = document.querySelector(".book-form");
form.style.display = "none";

const title = document.getElementById("title");
const titleError = document.querySelector("#title + span.error");
const author = document.getElementById("author");
const authorError = document.querySelector("#author + span.error");
const pages = document.getElementById("pages");
const isReadBtns = document.getElementsByName("isRead");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(book);
  let bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  const ul = document.createElement("ul");
  bookCard.appendChild(ul);

  const title = document.createElement("li");
  title.innerHTML = `Title: ${book.title}`;
  ul.appendChild(title);

  const author = document.createElement("li");
  author.innerHTML = `Author: ${book.author}`;
  ul.appendChild(author);

  const pages = document.createElement("li");
  pages.innerHTML = `Pages: ${book.pages}`;
  ul.appendChild(pages);

  const isRead = document.createElement("li");
  isRead.innerHTML = `Read?: ${book.isRead}`;
  ul.appendChild(isRead);

  const isReadBtn = document.createElement("button");
  isReadBtn.textContent = "Read?";
  isReadBtn.addEventListener("click", () => {
    if (book.isRead === "Yes") {
      isRead.remove();
      book.isRead = "No";
      isRead.innerHTML = `Read?: ${book.isRead}`;
      ul.appendChild(isRead);
    } else {
      isRead.remove();
      book.isRead = "Yes";
      isRead.innerHTML = `Read?: ${book.isRead}`;
      ul.appendChild(isRead);
    }
  });

  const removeBookBtn = document.createElement("button");
  removeBookBtn.textContent = "Remove Book";
  removeBookBtn.addEventListener("click", () => {
    bookCard.remove();
  });

  bookCard.appendChild(isReadBtn);
  bookCard.appendChild(removeBookBtn);
  bookContainer.appendChild(bookCard);
}

const book1 = new Book("Lord of The Flies", "William Golding", "224", "Read");
const book2 = new Book("Ulysses", "James Joyce", "732", "Not Read");

addBookToLibrary(book1);
addBookToLibrary(book2);

newBookBtn.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const titleInput = title.value;
  const authorInput = author.value;
  const pagesInput = pages.value;

  let isReadInput = "";
  for (const isReadBtn of isReadBtns) {
    if (isReadBtn.checked) {
      isReadInput = isReadBtn.value;
    }
  }

  if (title.validity.valueMissing) {
    titleError.textContent = "Title is required.";
  } else if (author.validity.valueMissing) {
    authorError.textContent = "Author is required.";
  } else {
    addBookToLibrary(
      new Book(titleInput, authorInput, pagesInput, isReadInput)
    );
  }
});
