const myLibrary = [{
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 300,
    read: true,
    id: "a6b87e7e-62d2-4f9a-b2a9-2d836c14a881"
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    read: false,
    id: "f013abe5-5e15-4adf-b6a6-44f3adfcfa91"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    read: true,
    id: "7c2fc60e-3e4b-41be-b993-16af7f56e2f4"
  }];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (read === "read") ? true : false;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}

function displayBooks(list) {
    const tableBody = document.querySelector('#books-table tbody');
    tableBody.textContent = "";
 
    list.forEach((book, index) => {
        let row = document.createElement("tr");
        row.setAttribute("data-id", book.id);

        let number = document.createElement("th");
        number.setAttribute("scope", "row");
        number.textContent = index + 1;

        let title = document.createElement("td");
        title.textContent = book.title;

        let author = document.createElement("td");
        author.textContent = book.author;

        let pages = document.createElement("td");
        pages.textContent = book.pages;

        let status = document.createElement("td");
        status.textContent = book.read ? "Read" : "Unread";

        row.appendChild(number);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(status);
        tableBody.appendChild(row);
    }) 
    
}