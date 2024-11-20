// Task Management
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    addTask(newTask);
    newTaskInput.value = "";
  }
});

function addTask(task) {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
}

// Blog Management
const blogPosts = document.getElementById("blog-posts");
const newBlogPost = document.getElementById("new-blog-post");
const publishBlog = document.getElementById("publish-blog");

publishBlog.addEventListener("click", () => {
  const content = newBlogPost.value.trim();
  if (content) {
    const post = document.createElement("div");
    post.textContent = content;
    post.classList.add("blog-post");
    blogPosts.appendChild(post);
    newBlogPost.value = "";
  }
});

// Animated Background Particles
function createParticles() {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 4000);
}

setInterval(createParticles, 100);
