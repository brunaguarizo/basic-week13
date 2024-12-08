const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
Create a simple application that manages a list of favorite fruits. The application should allow users to add fruits to their favorites list, but only if the fruit is one of the following: "apple", "banana", "cherry", "date", or "elderberry". Users can also remove a fruit from their favorites list. After any addition or removal, the application should display the current list of favorite fruits. 

CHALLENGE - Implement a feature that allows users to toggle the availability of each fruit using a boolean. If a fruit is marked as false, it cannot be added to the favorites list. After toggling a fruit to false, that fruit is istill in the array but will no longer be displayed or console logged.
*/

/* -------------------- PLANNING -------------------- 
Favorite fruits list

Command = add
   if the fruitSettings = apple, banana, cherry, date, or elderberry
   adds the fruit to the favFruits list
then display the list

Command = remove
   it will be necessary to check in the list if the fruits -> favFruits
    if it is included in the favFruits -> removes it
then display the list

fruitSettings -> toggle
      false -> denied
      true -> add the fruit

  -------------------- PLANNING -------------------- */

let favFruits = [];

//CHALLENGE
let fruitSettings = {
  //the fruits
  apple: true,
  banana: true,
  cherry: true, 
  date: true, 
  elderberry: true,
};

function AddFruit() {
  readline.question("What is your favorite fruit? ", (fruit) => {
    // Check if the fruit is available
    if (fruitSettings[fruit] === true) {
      favFruits.push(fruit);
      console.log(`The fruit "${fruit}" was added to the list.`);
    } else if (fruitSettings[fruit] === false) {
      console.log(`The fruit "${fruit}" is not available.`);
    } else {
      console.log("This fruit is not valid.");
    }
    StartApp();
  });
}

function DisplayFruits() {
  if (favFruits.length === 0) {
    console.log("There are no fruits in the favorite list.");
  } else {
    console.log(`List of favorite fruits: ${favFruits} `);
  };
  StartApp();
}


function ToggleFruitSetting() {
  for (let fruit in fruitSettings) {
    fruitSettings[fruit] = !fruitSettings[fruit];}
    console.log("The availability of all fruits has been toggled.");
    StartApp();
}

function StartApp() {
  readline.question(
    "What is your command? You can add, display, toggle, or quit: ", (command) => {
      if (command === "quit") {
        readline.close();
      } else if (command === "add") {
        AddFruit();
        StartApp();
      } else if (command === "display") {
        DisplayFruits();
        StartApp();
      } else if (command === "toggle") {
        ToggleFruitSetting();
        StartApp();
      } else {
        console.log("Command not found.");
        StartApp();
      }
    }
  );
}


StartApp();