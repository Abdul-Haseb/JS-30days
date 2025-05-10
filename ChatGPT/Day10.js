const tasks = [
  {
    task: "i did my js Chatgt task today",
    completed: true,
  },
  {
    task: " I have to create my js 3rd project",
    completed: false,
  },
  {
    task: "I have watched the video of my js playList",
    completed: false,
  },
];

const tasksContainer = document.querySelector(".tasks");
const completedTasks = document.querySelector(".completeTasks");
tasks.map((task) => {
  const createP = document.createElement("p");
  const p2 = document.createElement("p");
  createP.innerHTML = task.task;
  p2.innerHTML = task.completed;
  tasksContainer.appendChild(createP);
  tasksContainer.appendChild(p2);
});

const filteredTasks = (arr) => {
  const filtered = arr.filter((task) => task.completed);

  filtered.map((task) => {
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.innerHTML = task.task;
    p2.innerHTML = task.completed;
    completedTasks.appendChild(p);
    completedTasks.appendChild(p2);
  });
};

filteredTasks(tasks);

// Chat gpt version
// const tasks = [
//   {
//     task: "I did my JS ChatGPT task today",
//     completed: true, // changed from "true" to true
//   },
//   {
//     task: "I have to create my JS 3rd project",
//     completed: false,
//   },
//   {
//     task: "I have watched the video of my JS playlist",
//     completed: false,
//   },
// ];

// const tasksContainer = document.querySelector(".tasks");
// const completedTasks = document.querySelector(".completeTasks");

// // Show all tasks
// tasks.map((task) => {
//   const p = document.createElement("p");
//   p.textContent = `Task: ${task.task} - Completed: ${task.completed}`;
//   tasksContainer.appendChild(p);
// });

// // Show only completed tasks
// const filteredTasks = (arr) => {
//   const completed = arr.filter((task) => task.completed);

//   completed.map((task) => {
//     const p = document.createElement("p");
//     p.textContent = `✅ ${task.task}`;
//     completedTasks.appendChild(p);
//   });
// };

// filteredTasks(tasks);
