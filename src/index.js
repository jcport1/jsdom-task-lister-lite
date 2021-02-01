// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

// });

//grab the form by id and save to a variable
const myForm = document.getElementById('create-task-form')

//**bonus** 

//create a select dropdown for level of importance
const selectDropdown = document.createElement("select")
//insert the select dropdown into the existing form
myForm.children[1].insertAdjacentElement('afterend', selectDropdown)

//create options for dropdown, add innerhtml, and then append to dropdown

const highOption = document.createElement("option")
highOption.innerText = "high"
selectDropdown.append(highOption)

const mediumOption = document.createElement("option")
mediumOption.innerText = "medium"
selectDropdown.append(mediumOption)

const lowOption = document.createElement("option")
lowOption.innerText = "low"
selectDropdown.append(lowOption)

//importance color function

function importanceColor(importance) {
  if(importance === "high") {
    return "red"
  } else if (importance === "medium") {
    return "orange"
  } else {
    return "green"
  }
}

// bonus ****

//add an event lister for submit 
//add callback fuction 
myForm.addEventListener("submit", handleFormSubmit)

//bonus ***

//delete for li button callback function 
//removes parent element of that button from the DOM
function handleDelete(e) {
  e.target.parentElement.remove()
}

//***bonus**

//callback function 

function handleFormSubmit(event) {
//prevent the default action of the form -> which is a redirect 
  event.preventDefault()
  //getting the parameters of what was submitted 
  //save the user's task as a variable 
  const newTask = event.target["new-task-description"].value 

  //save the importance value into a variable
  const importanceLevel = event.target.children[2].value 
  //convert the importance level to color & safe to variable that we can use to update style of LI tag

  const color = importanceColor(importanceLevel)


  //display the task on the DOM
  //select the UL off the page
  const taskUL = document.querySelector("#tasks")
  //create delete button -> bonus 
  const deleteBtn = document.createElement("button")
  //make the inner text an X
  deleteBtn.innerText = "X"
  //make event listener for delete button
  //make callback function for handleDelete
  deleteBtn.addEventListener("click", handleDelete)


  //create a new LI tag 
  const LI = document.createElement("li")
  //add importance level color variable 
  LI.style.color = color 
  //take the info from the user input and add that to the LI
  //first modify the LI to have text in it.
  LI.textContent = newTask  

  //bonus: append delete button to new LI *order matters* add after you create text content of LI
    LI.append(deleteBtn)

  //then append as a child onto the taskUL
  taskUL.appendChild(LI)
  //clear the form
  event.target.reset()
  
}
