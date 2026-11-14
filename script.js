const taskInput = document.getElementById('taskInput');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('addTaskButton')




function addTask() {
    if (taskInput.value === '') {
        alert("Please enter a task");
    }   

    else {
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        listContainer.appendChild(li);
        taskInput.value = '';
        let span = document.createElement('span');
        span.className = 'close';
        span.innerHTML = '×';
        li.appendChild(span);
    }       

    taskInput.value = '';
    saveData();
    
}


addButton.addEventListener('click', addTask);

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();


    } else if (e.target.className === 'close') {
        let li = e.target.parentElement;
        li.remove();
        saveData();
    }
});   

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}   

showTask();


