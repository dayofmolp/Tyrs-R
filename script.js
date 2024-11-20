// Particles.js initialization
particlesJS.load('particles-js', 'particles-config.json');

// Task Manager
const taskForm = document.getElementById('add-task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = document.getElementById('task-input').value;
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    const subTaskList = document.createElement('ul');
    const subTaskInput = document.createElement('input');
    subTaskInput.placeholder = 'Add a sub-task...';
    subTaskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const subTask = document.createElement('li');
        subTask.textContent = e.target.value;
        subTaskList.appendChild(subTask);
        e.target.value = '';
      }
    });
    taskItem.appendChild(subTaskList);
    taskItem.appendChild(subTaskInput);
    taskList.appendChild(taskItem);
    document.getElementById('task-input').value = '';
  }
});
