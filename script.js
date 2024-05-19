document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    };

    // Event listener for the Add Task button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for the Enter key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
