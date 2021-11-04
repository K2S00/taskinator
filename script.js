//stopped on 4.2.6

//global vars
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//fuction
//preventDefaults prevents page from automaticly refreshing
//will Create a new task item.  listItemEl.className = "task-item";
// Add the text. this is a new task listItemEl.textContent= "this is a new task";
// add a class to the item so our css can read it listItemEl.className = "task-item";
// append element to the task list tasksToDoEl.appendChild(listItemEl);

var createTaskHandler = function (event) {
  event.preventDefault();
   
  // when we use [] in a selector we're trying to select an HTML element
//here we are selecting the <input> element

var taskNameInput = document.querySelector("input[name='task-name']").value;

// getting the value of the <select> dropdown
var taskTypeInput = document.querySelector("select[name='task-type']").value;

    
       // create list item
       var listItemEl = document.createElement("li");
       listItemEl.className = "task-item";
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    
    // give it a class name
    taskInfoEl.className = "task-info";

    // add HTML content to div (append)
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);


// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
    
  };


// this adds an event listner that when the form  is submited 
// it does the createTaskHandler fuction

formEl.addEventListener("submit", createTaskHandler);