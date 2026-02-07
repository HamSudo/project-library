# 📚 Library Management App

A simple browser-based library application that allows users to add, display, update, and remove books dynamically using JavaScript and DOM manipulation.

This project focuses on practicing object-oriented JavaScript, dynamic table rendering, and user interaction through forms and dialogs.

---

## ✨ Features

- Display a list of books in a structured table
- Add new books using a modal dialog form
- Toggle book read/unread status
- Delete books from the library
- Automatically update the UI when data changes
- Assign a unique identifier to each book

---

## 🛠️ Technologies Used

- HTML
- JavaScript (ES6+)
- DOM Manipulation
- HTML `<dialog>` element

---

## ⚙️ How It Works

- Books are represented as `Book` objects created using a constructor function
- All books are stored in an in-memory array (`myLibrary`)
- Each book is assigned a unique ID using `crypto.randomUUID()`
- The book list is rendered dynamically into an HTML table
- Event listeners handle:
  - Adding new books via a form
  - Toggling the read status of a book
  - Deleting books from the library
- The table updates automatically whenever the library data changes

---

## 🧠 What I Learned

- Using constructor functions and object methods in JavaScript
- Managing application state with arrays
- Dynamically creating and updating DOM elements
- Handling form submission with `FormData`
- Working with modern browser APIs like `crypto.randomUUID()`
- Using the HTML `<dialog>` element for modal interactions

---

## 🚧 Limitations & Possible Improvements

- Data is not persisted (refreshing the page resets the library)
- No form validation beyond required fields
- Styling could be improved for better user experience
- Could be extended with `localStorage` or a backend for persistence

---

## ▶️ How to Run

- Clone or download the repository
- Open `index.html` in your browser
- Click **New Book** to add books to the library
