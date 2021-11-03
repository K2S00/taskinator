var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//will Create a new task item.  listItemEl.className = "task-item";
// Add the text. this is a new task listItemEl.textContent= "this is a new task";
// add a class to the item so our css can read it listItemEl.className = "task-item";
// append element to the task list tasksToDoEl.appendChild(listItemEl);
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }


// this adds an event listner that when the button is clicked 
// it does the createTaskHandler fuction
buttonEl.addEventListener("click", createTaskHandler);
