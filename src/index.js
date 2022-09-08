// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   document.querySelector('form').addEventListener('submit', (e) =>{
//     e.preventDefault()                                                                 //preventing the default function
//   document.getElementById('new-task-description').value;
// });
// })
// function Mytodos(todo){
//   document.createElement('p')
//   p.appendChild(document.createTextNode(newTaskDescription));
//   p.textContent = `${todo}`
//   document.querySelector('#todo_container').appendChild(p)

//   document.createElement('btn')
//   btn.addEventListener('submit',handleDelete)
//   p.textContent='x'
//   p.appendChild(btn)

  
}
function removeTask(e) {
      if (e.target.nodeName === 'btn') {
        if(confirm('Are you sure?')) {
          let p = e.target.parentElement;
          taskList.removeChild(p);
        }
 document.addEventListener("DOMContentLoaded", () => {

const newTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription)});

    // Create new li element
    const li = document.createElement('li');

    // Add text node with input value
    li.appendChild(document.createTextNode(newTaskDescription));

    // create delete button element
    const deleteBtn = document.createElement('button');

    // append text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    taskList.appendChild(li);

  

  function removeTask(e) {
    if (e.target.nodeName === 'BUTTON') {
      if(confirm('Are you sure?')) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }

  }