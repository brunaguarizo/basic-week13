const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
Create a simple task management system. This system tracks tasks in different categories: "personal", "work", "urgent", "completed", and "archived". By default, each category starts with 0 tasks. The application should have two main functions:

1) DisplayTasksNumbers: When the user enters the command "tasks", the system should display each category and the number of tasks in it.
2) AddTask: When the user enters the command "add task", the system should prompt the user to specify which category to add a task to. The user will enter one of the categories, and the task count for that category will be incremented by 1.

CHALLENGE 1: Implement a function called TaskSummary. This function should calculate the total number of tasks across all categories. Based on the total number of tasks, assign a status:
- Less than 5 tasks: "light workload"
- Between 5 and 15 tasks: "moderate workload"
- Between 15 and 25 tasks: "heavy workload"
- More than 25 tasks: "overloaded"
*/

let tasksManagement = {
  //modes go here
  personal:0,
  work:0,
  urgent:0,
  completed:0,
  archived:0
};

//rename this to DisplayTasksNumbers
function DisplayTasksNumbers(){
  //loop through the tasks and log all the categories and all their corresponding numbers

  for(let key in tasksManagement){
    console.log("The task category", key, "has", tasksManagement[key], "tasks");
  }
}

//rename this to AddTask
function AddTask(){
  //Add the number to the correct category by capturing the readline

  readline.question("What is the category? ", _category=>{

    let checkCategory = false;

    for(let key in tasksManagement){
      if(key === _category){
        checkCategory = true;
      }
    }

    if(checkCategory === true){
      tasksManagement[_category]++;
    }

  })
}

function TaskSummary(){
  let total = 0;
  for(let key in tasksManagement){
    //add numbers together to total

    total += tasksManagement[key];
  }

  //if else statement
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "add task"){
      AddTask();
      StartApp();
    }  else if(_command === "tasks"){
      DisplayTasksNumbers();
      StartApp();
    } else{
      StartApp();
    }
  })
}

StartApp();
