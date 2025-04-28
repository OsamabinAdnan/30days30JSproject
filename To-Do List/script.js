const inputBox = document.getElementById ('input-box')
const listContainer = document.getElementById ('list-container')

// Button function to add task in list
function addTask(){
    if (inputBox.value === '') {
        alert ('You must write something to add in the list!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'; //this code is for cross icon
        li.appendChild(span);
    }
    inputBox.value = ''
    saveData ()
}
// For the click function 
listContainer.addEventListener("click" , (e)=> {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData ();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData ();
    }
}, false);
//  parameter (false) specifies that the event listener uses bubbling (the default behavior), meaning the event propagates from the child element up to its parent(s).

// Function to save the tasks in local storage so they will not disappear when reloading | Add data in browser
function saveData (){
    localStorage.setItem("data", listContainer.innerHTML)
}
//to see the data whenever we open website again
function showTasks () {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTasks ()