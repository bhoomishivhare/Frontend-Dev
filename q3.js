"use strict";
// Q3 - Book class, issue/return, search by ISBN and list available books

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = String(isbn);
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`Book "${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`Book "${this.title}" issued successfully.`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`Book "${this.title}" was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`Book "${this.title}" returned successfully.`);
    return true;
  }

  display() {
    return `${this.title} by ${this.author} (ISBN: ${this.isbn}) — ${this.isIssued ? "Issued" : "Available"}`;
  }
}

// sample library
const library = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
  new Book("Clean Code", "Robert C. Martin", "ISBN002"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "ISBN003")
];

// display available books
console.log("Available books:");
library.filter(b => !b.isIssued).forEach(b => console.log(b.display()));

// allow issuing by ISBN (example)
function issueByISBN(isbn) {
  const book = library.find(b => b.isbn === isbn);
  if (!book) {
    console.log("Book not found:", isbn);
    return;
  }
  book.issueBook();
}

// Demonstration:
issueByISBN("ISBN002");
console.log("\nAfter issuing ISBN002, available books:");
library.filter(b => !b.isIssued).forEach(b => console.log(b.display()));

// return demonstration
library.find(b => b.isbn === "ISBN002").returnBook();
