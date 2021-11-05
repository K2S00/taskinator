

//global vars
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//fuction
//preventDefaults prevents page from automaticly refreshing
//will Create a new task item.  listItemEl.className = "task-item";
// Add the text. this is a new task listItemEl.textContent= "this is a new task";
// add a class to the item so our css can read it listItemEl.className = "task-item";
// append element to the task list tasksToDoEl.appendChild(listItemEl);

//
var taskFormHandler = function(event) {
  event.preventDefault();
  // when we use [] in a selector we're trying to select an HTML element
//here we are selecting the <input> element
var taskNameInput = document.querySelector("input[name='task-name']").value;


// getting the value of the <select> dropdown
var taskTypeInput = document.querySelector("select[name='task-type']").value;
 
//this code literally says, "if either one or both of the variables are not true, then proceed," 
 //which is the same as "if either one or both of the variables are false, then proceed."
// check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
  alert("You need to fill out the task form!");
  return false;
  formEl.reset();
}

   // package up data as an object
   var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput


};

// send it as an argument to createTaskEl
createTaskEl(taskDataObj);
  
  };

  // creates a new task HTML element
  var createTaskEl = function (taskDataObj) {
   
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

 // add entire list item to list
 tasksToDoEl.appendChild(listItemEl);
};
// this adds an event listner that when the form  is submited 
// it does thetaskFormHandler fuction

formEl.addEventListener("submit", taskFormHandler);