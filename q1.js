const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
Create a simple library management application with the following features:

1) Allow users to register books by entering the book title. Store this information in an array.
2) Using the libraryCard object, assign "borrow" as one of the key and have it's value default to false. When the user uses the command "borrow", toggle it. A user can only register books if borrow is true.
3) List all the books registered under your array

CHALLENGE 1: The same book cannot be borrowed twice. So if a user tried to borrow a book that's already in the array, deny them

CHALLENGE 2: Make it so that the user can return their books with a "return" command. Returning books means the book registry is an empty array again.
*/

/* -------------------- PLANNING -------------------- 

Command = register book (function RegisterBook)
libraryCard
  if borrow -> toggle (function ToggleBorrow)
      false -> denied
      true -> add the book

Command = check registry (function ListBooks)
    -> check the list of books

1 main list - bookregistry
    to register book name, just push it to the list


CHALLENGE 1  
if you can register the book -> borrow = true
  it will be necessary to check in the list if the book is borrowed or not -> checkBorrow
    if it is included in the checkBorrow -> cannot be added because it is already borrow
    if it is not includded in the checkBorrow -> add the book name
if you can register the book -> borrow = false
  console log > permision denied

CHALLENGE 2
if it is included in the checkBorrow 
Command = return
    -> removes book from the list

----------------------- PLANNING -------------------- */

let bookregistry = [];
let libraryCard = {
  borrow: false,
};

//rename this to RegisterBook
function RegisterBook() {
  if (!libraryCard.borrow) {
    console.log("You cannot borrow a book. Turn the borrow option on");
    StartApp();
  }
  readline.question("Type the name of the book that you want to add ", (book) => {
    if (bookregistry.includes(book)) {
      console.log("This book is already borrowed");
    } else {
      bookregistry.push(book);
      console.log(`The book "${book}" was added`);
    }
    StartApp();
  });
}

//rename this to ToggleBorrow
function toggleBorrow() {
  libraryCard.borrow = !libraryCard.borrow;
  console.log(`The borrow book status is: ${libraryCard.borrow ? "on": "off"}`);
  StartApp();
}

//rename this to ListBooks
function ListBooks() {
  if (bookregistry.length === 0) {
    console.log("There is no book added");
  } else {
    console.log(`List of book registered: ${bookregistry}`);
    };
  StartApp();
}

// return book
function returnBooks() {
  bookregistry = [];
  console.log("All the books were returned.");
  StartApp();
}

function StartApp(){
  readline.question("What is your command? You can add, borrow, list or return a book ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "add"){
      RegisterBook();
      StartApp();
    } else if(_command === "borrow"){
      toggleBorrow();
      StartApp();
    } else if (_command === "list"){
      ListBooks();
      StartApp();
    } else if(_command === "return"){
      returnBooks();
      StartApp();
    } else {
      console.log("Command not found");
      StartApp();
    }}
    )
}

StartApp();

//code is working! great job! -- vien
