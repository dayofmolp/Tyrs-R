// Initialize Firebase
import { firebaseApp, database } from './firebase.js';

// Task Manager
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Save Task
function saveTask(taskText) {
    const taskId = database.ref('tasks').push().key;
    database.ref(`tasks/${taskId}`).set({ text: taskText, completed: false });
}

// Load Tasks
function loadTasks() {
    database.ref('tasks').on('value', (snapshot) => {
        const tasks = snapshot.val();
        taskList.innerHTML = '';
        for (let id in tasks) {
            const task = tasks[id];
            const taskItem = document.createElement('li');
            taskItem.textContent = task.text;
            taskItem.onclick = () => toggleTask(id);
            taskList.appendChild(taskItem);
        }
    });
}
loadTasks();

// Toggle Task Completion
function toggleTask(taskId) {
    const taskRef = database.ref(`tasks/${taskId}`);
    taskRef.once('value').then((snapshot) => {
        const task = snapshot.val();
        taskRef.update({ completed: !task.completed });
    });
}

// Handle Add Task Form
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = document.getElementById('task-input').value;
    if (taskText) {
        saveTask(taskText);
        document.getElementById('task-input').value = '';
    }
});

// Supabase Blog Integration
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchBlogPosts() {
    const { data, error } = await supabase.from('blog_posts').select();
    const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = '';
    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogContainer.appendChild(postElement);
    });
}
fetchBlogPosts();
