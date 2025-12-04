class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.available === true);
    }

    searchByAuthor(author) {
        return this.books.find(book => book.author === author);
    }
}

// Create books
let library = new Library();
library.addBook({ title: "The Alchemist", author: "Paulo Coelho", available: true });
library.addBook({ title: "Atomic Habits", author: "James Clear", available: false });
library.addBook({ title: "Ikigai", author: "Hector Garcia", available: true });

// Demo
console.log("Available Books:", library.getAvailableBooks());
console.log("Search by Author:", library.searchByAuthor("Paulo Coelho"));
