/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
  
type Book = {
    isbn: string;
    title: string;
    author: string;
    totalPages: number;
    category: string;
    isAvailable: boolean;
};

const book1: Book = {
  isbn: "978-602-05-3132-8",
  title: "Seporsi Mie Ayam Sebelum Mati",
  author: "Brian Khrisna",
  totalPages: 216,
  category: "Novel Lokal",
  isAvailable: true,
};

const book2: Book = {
  isbn: "979-8-4009-0551-3",
  title: "Omniscient Reader's Viewpoint",
  author: "singNsong",
  totalPages: 244,
  category: "Action, Fantasy, Metafiction",
  isAvailable: false,
};

const book3: Book = {
  isbn: "978-602-03247-8-4",
  title: "Hujan",
  author: "Tere Liye",
  totalPages: 320,
  category: "Sci-Fi, Romance, Drama",
  isAvailable: true,
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);