const myLibrary = [
    new Book("Harry Potter", "J.K. Rowling", 300, "read", "a6b87e7e-62d2-4f9a-b2a9-2d836c14a881"),
    new Book("1984", "George Orwell", 328, "unread", "f013abe5-5e15-4adf-b6a6-44f3adfcfa91")
];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (read === "read") ? true : false;
    this.id = crypto.randomUUID();

    this.toggleRead = function() {
        this.read = !this.read;
    };
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

        let actions = document.createElement("td");
        actions.setAttribute("colspan", "2");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("class", "delete");
        deleteBtn.addEventListener("click", () => {
            let index = myLibrary.findIndex(book => book.id === row.dataset.id);
            myLibrary.splice(index, 1);
            row.remove();
        })

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle";
        toggleBtn.setAttribute("class", "toggle");
        toggleBtn.addEventListener("click", function () {
            book.toggleRead();
            status.textContent = book.read ? "Read" : "Unread";
        });
        

        actions.appendChild(deleteBtn);
        actions.appendChild(toggleBtn);

        row.appendChild(number);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(status);
        row.appendChild(actions);
        tableBody.appendChild(row);
    }) 
    
}

displayBooks(myLibrary);

const openDialog = document.querySelector("#openDialog");
const dialog = document.querySelector("#addDialog");
const form = document.querySelector("#addForm");
const cancelBtn = document.querySelector("#cancelBtn");

openDialog.addEventListener("click", () => {
    dialog.show();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    formEntries = Object.fromEntries(formData);

    dialog.close();
    form.reset();

    addBookToLibrary(formEntries.title, formEntries.author, formEntries.pages, formEntries.status);
    displayBooks(myLibrary);
});

