const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const selectedTime = document.getElementById('timeSelector')

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const selectedTime1 = selectedTime.value.trim();
    if (taskText !== '') {
        createTask(taskText,selectedTime1);
        taskInput.value = '';
    }
});

function createTask(text,time) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <span>(${time})</span>
        <button>Edit</button>
        <button>Delete</button>
    `;
    taskList.appendChild(taskItem);


    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    const editButton = taskItem.querySelector('button:nth-of-type(1)');
    const deleteButton = taskItem.querySelector('button:nth-of-type(2)');

    checkbox.addEventListener('change', () => {
        taskItem.classList.toggle('completed');
    });

    editButton.addEventListener('click', () => {
        const taskTextElement = taskItem.querySelector('span');
        const newText = prompt('Edit task:', taskTextElement.textContent);
        if (newText !== null) {
            taskTextElement.textContent = newText;
        }
    });

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}
