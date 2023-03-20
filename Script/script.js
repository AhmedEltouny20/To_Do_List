const addButtons = document.querySelectorAll(".btn-add");
let taskDraggable;
const tasksContainer = document.querySelectorAll(".tasks");

let drag = null;
let tasksArr = JSON.parse(localStorage.getItem("tasksSaved"));
const Completed = document.querySelector(".Completed");
const InProgress = document.querySelector(".In_Progress");
const NotStarted = document.querySelector(".Not_Started");
// let deleted = e
for (i in tasksArr) {
  if (tasksArr[i] === "Completed" && tasksArr[i] !== editAndDelet()) {
    Completed.append(createElement());
    editAndDelet();
    dragSrartAndEnd();
  } else if (tasksArr[i] === "In_Progress") {
    InProgress.append(createElement());
    editAndDelet();
    dragSrartAndEnd();
  } else if (tasksArr[i] === "Not_Started") {
    NotStarted.append(createElement());
    editAndDelet();
    dragSrartAndEnd();
  }
}

function createElement() {
  const task = document.createElement("div");
  const form = document.createElement("input");
  const edit = document.createElement("button");
  const delet = document.createElement("button");
  const iconEdit = document.createElement("icon");
  iconEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-edit">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
`;
  edit.append(iconEdit);
  const iconDelet = document.createElement("icon");
  iconDelet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-delet">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
`;
  delet.append(iconDelet);
  task.className = "task";
  task.draggable = "true";
  task.setAttribute("id", Math.random());
  form.type = "text";
  form.className = "input";
  edit.className = "btn btn-edit";
  edit.id = "btn btn-edit";
  delet.className = "btn btn-delet";
  delet.id = "btn btn-delet";
  task.append(form, edit, delet);
  return task;
}

function editAndDelet() {
  editButtons = document.querySelectorAll(".btn-edit");
  deletButtons = document.querySelectorAll(".btn-delet");
  taskDraggable = document.querySelectorAll(".task");

  deletButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".task").remove();
      let deleted = button.closest(".task").remove();
      let id = button.closest(".task").id;

      taskDraggable = document.querySelectorAll(".task");
      storTasks(taskDraggable);
    });
  });
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".task").querySelector("input").select();
    });
  });
}

addButtons.forEach((btn) => {
  const tasks = btn.closest(".toDo").querySelector(".tasks");
  btn.addEventListener("click", () => {
    const task = document.createElement("div");
    const form = document.createElement("input");
    const edit = document.createElement("button");
    const delet = document.createElement("button");
    const iconEdit = document.createElement("icon");
    iconEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-edit">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
  `;
    edit.append(iconEdit);
    const iconDelet = document.createElement("icon");
    iconDelet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-delet">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
  `;
    delet.append(iconDelet);
    task.className = "task";
    task.draggable = "true";
    task.setAttribute("id", Math.random());
    form.type = "text";
    form.className = "input";
    edit.className = "btn btn-edit";
    edit.id = "btn btn-edit";
    delet.className = "btn btn-delet";
    delet.id = "btn btn-delet";
    task.append(form, edit, delet);
    tasks.append(task);

    editAndDelet();
    dragSrartAndEnd();
    storTasks(taskDraggable);
  });
});

// add drag start and drag end func
function dragSrartAndEnd() {
  taskDraggable.forEach((task) => {
    task.addEventListener("dragstart", () => {
      drag = task;
      task.classList.add("dragging");
    });
    task.addEventListener("dragend", () => {
      task.classList.remove("dragging");
      drag = null;
    });
  });
}
// function touchStartGrag() {
//   taskDraggable.forEach((task) => {
//     task.addEventListener("touchstart", (e) => {
//       drag = e.target.parentElement;
//       console.log(drag);
//       task.classList.add("dragging");
//       task.append(drag);
//     });
//     task.addEventListener("touchmove", (e) => {
//       task.classList.remove("dragging");
//       task.classList.remove("dragging");
//       console.log("touch move");
//       drag = null;
//     });
//   });
// }

// detarmaned the elements when cursre havered on
function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".task:not(.dragging)"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// drag leave,over and drop
tasksContainer.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElements = getDragAfterElement(container, e.clientY);
    if (afterElements == null) {
      container.append(drag);
    } else {
      container.insertBefore(drag, afterElements);
    }
    container.classList.add("dragover");
  });
  container.addEventListener("dragleave", () => {
    container.classList.remove("dragover");
  });

  container.addEventListener("drop", () => {
    container.classList.remove("dragover");
    storTasks(taskDraggable);
  });
});

let array = {};

function storTasks(allTasks) {
  const indexTasks = [...allTasks];

  for (i in indexTasks) {
    let task = indexTasks[i];
    let parent = indexTasks[i].closest(".tasks").querySelector("h3").innerHTML;
    array[task.id] = parent;
  }
  localStorage.setItem("tasksSaved", JSON.stringify(array));
}
