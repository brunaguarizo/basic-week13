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

/* -------------------- PLANNING -------------------- 

5 main categories
  - personal
  - work
  - urgent
  - completed
  - archived

Command = list
   -> see the categories + number of tasks

Command = "add"
  -> to add the task, just push it to the category list
  -> push the taskName
  -> number +1

Command = "total"
function -> TaskSummary
-> show the total number of tasks = totalTasks
-> show status:
              if totalTasks >5 console.log "light workload"
              if totalTasks <=5 & >15 console.log "moderate workload"
              if totalTasks <=15 & >25 console.log "heavy workload"
              if totalTasks <=25 console.log "overloaded"


----------------------- PLANNING -------------------- */

let tasksManagement = {
  personal:0,
  work:0,
  urgent:0,
  completed:0,
  archived:0,
};

function DisplayTasksNumbers() {
  console.log("------ TASKS BY CATEGORY ------");
  Object.keys(tasksManagement).forEach((category) => {
    console.log(`${category}: ${tasksManagement[category]} task(s)`);
  });
}

function AddTask() {
  readline.question("Enter the category to add a task (personal, work, urgent, completed, archived): ", (category) => {
    if (Object.keys(tasksManagement).includes(category)) {
      tasksManagement[category]++;
      console.log(`Task added to "${category}" category.`);
      } else {
        console.log("Invalid category. Try again.");
      } StartApp();
    }
  );
}

function TaskSummary() {
  let totalTasks = 0;
  for (let total in tasksManagement) {
    totalTasks += tasksManagement[total];
  }

  let status;
  if (totalTasks <= 5) {
    status = "light workload";
  } else if (totalTasks > 5 && totalTasks <= 15) {
    status = "moderate workload";
  } else if (totalTasks > 15 && totalTasks <= 25) {
    status = "heavy workload";
  } else {
    status = "overloaded";
  }

  console.log("------ TASK SUMMARY ------");
  console.log(`Total tasks: ${totalTasks}`);
  console.log(`Workload status: ${status}`);
}

function StartApp() {
  readline.question("What is your command? (add, list, summary, quit) ", (command) => {
    if (command === "add") {
      AddTask();
      StartApp();
    } else if (command === "list") {
      DisplayTasksNumbers();
      StartApp();
    } else if (command === "summary") {
      TaskSummary();
      StartApp();
    } else if (command === "quit") {
      readline.close();
    } else {
      console.log("Command not found.");
      StartApp();
    }
  });
}

StartApp();