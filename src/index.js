import { projectMenu } from "./init/init-menu-sidebar.js";
import { ToDo, projectTracker} from "./todos/todo.js";
import { DOMTree } from "./misc/util.js";

let hamburgerBtn = document.getElementById("hamburger");
let openIcon = document.getElementById("openIcon");
let closeIcon = document.getElementById("closeIcon");

hamburgerBtn.addEventListener("click", e => {
    if(projectMenu.classList.contains("showProjectMenu")) {
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
    } else {
        openIcon.style.display = "none";
        closeIcon.style.display = "inline";
    }
    projectMenu.classList.toggle("showProjectMenu");
})

document.body.appendChild(projectMenu);

let activeProject = projectTracker.getActiveProject();
let allToDos = activeProject.getAllToDos();

let toDoContainer = document.getElementById("toDoDisplay");
allToDos.forEach(eachToDo => {
    let toDoTemplate = document.getElementById("toDoRowTemplate");
    let toDoRow = toDoTemplate.content.cloneNode(true);

    let toDoTitle = toDoRow.querySelector(".toDoTitle");
    toDoTitle.textContent = eachToDo.title;
    toDoContainer.appendChild(toDoRow);

    let separator = new DOMTree(toDoContainer, {
        name: "div",
        class: "toDoSeparator",
    });
});