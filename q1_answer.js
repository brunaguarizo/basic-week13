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

let bookregistry = [];
let libraryCard = {
  //library card setting goes here
  borrow:false
};

//rename this to RegisterBook
function RegisterBook(){
  //ask for the book title with readline
  if(libraryCard.borrow === true){
    readline.question("What book are you registering? ", _book=>{
      let exist = false;
      for(let i=0; i<bookregistry.length; i++){
        if(bookregistry[i] === _book){
          exist = true;
        }
      }

      if(exist === false){
        bookregistry.push(_book);
      }
    })
  }
}

//rename this to ToggleBorrow
function ToggleBorrow(){
  //toggle borrow setting
  libraryCard.borrow = !libraryCard.borrow;
  console.log("your borrow setting is ", libraryCard.borrow);
}

//rename this to ListBooks
function ListBooks(){
  //go through the array to list all the books

  for(let i=0; i<bookregistry.length; i++){
    console.log("Registered Book:",bookregistry[i])
  }
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "register"){
      RegisterBook();
      StartApp();
    } else if(_command === "borrow"){
      ToggleBorrow();
      StartApp();
    } else if(_command === "list"){
      ListBooks();
      StartApp();
    } else if(_command === "return"){
      bookregistry = [];
      console.log("all books return");
      StartApp();
    }else{
      StartApp();
    }
  })
}

StartApp();
