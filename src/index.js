import { projectMenu } from "./init/init-menu-sidebar.js";
import { ToDo, projectTracker} from "./todos/todo.js";
import { DOMTree } from "./misc/util.js";

function markToDoAsFinished(e) {
        let toDoTop = e.target.parentElement.parentElement;
        toDoTop.classList.toggle("strikedOutTitle");

        let currentToDo = toDoTop.parentElement;
        currentToDo.classList.toggle("finishedToDo");

        let descr = currentToDo.getElementsByClassName("toDoDescription")[0];
        descr.classList.toggle("strikedOutDescription");
}

function toggleCollapseExpand(e) {
    this.classList.toggle("collapseBtnRotate");
    let currentToDo = this.parentElement.parentElement.parentElement;
    let moreInfo = currentToDo.children[1];
    moreInfo.classList.toggle("toDoExpand");
}

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

    let toDoCheckBtn = toDoRow.querySelector(".toDoCheckbox");
    toDoCheckBtn.addEventListener("click", markToDoAsFinished);

    let toDoTitle = toDoRow.querySelector(".toDoTitle");
    toDoTitle.textContent = eachToDo.title;

    let moreInfo = toDoRow.querySelector(".toDoMoreInfo");
    let toDoDescription = moreInfo.getElementsByClassName("toDoDescription")[0];
    let toDoDate = moreInfo.getElementsByClassName("toDoDate")[0];
    toDoDescription.textContent = eachToDo.description;
    toDoDate.textContent = eachToDo.dueDate;

    let collapseBtn = toDoRow.querySelector(".collapseBtn");
    collapseBtn.addEventListener("click", toggleCollapseExpand);
    toDoContainer.appendChild(toDoRow);

    let separator = new DOMTree(toDoContainer, {
        name: "div",
        class: "toDoSeparator",
    });
});