const background = document.querySelector(".background");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
background.style.backgroundImage = "url('images/bg-desktop-light.jpg')";

const addTodo = () => {
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.justifyContent = "space-between";
  li.style.gap = "10px";
  li.style.paddingBottom = "10px";
  li.style.borderBottom = "1px solid grey";
  li.style.boxSizing = "border-box";
  const delImg = document.createElement("img");
  delImg.src = "./images/icon-cross.svg";
  delImg.style.width = "15px";
  delImg.style.height = "15px";
  const div = document.createElement("div");
  div.style.border = "1px solid grey";
  div.style.borderRadius = "50%";
  div.style.width = "15px";
  div.style.height = "15px";
  div.style.cursor = "pointer";

  const textDiv = document.createElement("div");
  textDiv.style.display = "flex";
  textDiv.style.alignItems = "center";
  textDiv.style.gap = "10px";
  textDiv.textContent = todoInput.value;
  textDiv.prepend(div);

  li.appendChild(textDiv);
  li.appendChild(delImg);
  todoList.appendChild(li);

  todoInput.value = "";
};

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && todoInput.value !== "") {
    addTodo();
  }
});

const init = () => {};

init();
