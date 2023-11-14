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

function editToDo(e, elementToEdit, toDoProp, toDoID) {
    elementToEdit.setAttribute("contenteditable", "true");
    elementToEdit.addEventListener("keydown", e => {
        if((!e.ctrlKey) && (!["Enter", "Escape", "Backspace"].includes(e.key)) 
            && e.target.textContent.length >= 30) {
            e.preventDefault();
            return;
        }

        if(e.key === "Enter") {
            let toDoToEdit = activeProject.getToDo(toDoID)
            toDoToEdit[toDoProp] = e.target.textContent;
            e.target.removeAttribute("contenteditable");
            console.log(activeProject);
        }

    })
    elementToEdit.focus();
}

function editToDoTitle(e) {
    let toDoTopRow = this.parentElement.parentElement;
    let toDoTitle = toDoTopRow.children[0].children[1];
    let toDoID = +toDoTopRow.parentElement.dataset.id;

    editToDo(e, toDoTitle, "title", toDoID);
}

function editToDoDescription(e) {
    let toDoDescription = this.parentElement.children[0]
    let toDo = this.parentElement.parentElement.parentElement
    let toDoID = +toDo.dataset.id;

    editToDo(e, toDoDescription, "description", toDoID);
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

    let currentToDo = toDoRow.querySelector(".toDoRow");
    currentToDo.dataset.id = eachToDo.toDoID;

    let toDoCheckBtn = toDoRow.querySelector(".toDoCheckbox");
    toDoCheckBtn.addEventListener("click", markToDoAsFinished);

    let toDoTitle = toDoRow.querySelector(".toDoTitle");
    toDoTitle.textContent = eachToDo.title;

    let moreInfo = toDoRow.querySelector(".toDoMoreInfo");
    let toDoDescription = moreInfo.getElementsByClassName("toDoDescription")[0];
    let toDoDate = moreInfo.getElementsByClassName("toDoDate")[0];
    toDoDescription.textContent = eachToDo.description;
    toDoDate.setAttribute("value", eachToDo.dueDate);

    let titleEditor = toDoRow.querySelector(".titleEditBtn");
    titleEditor.addEventListener("click", editToDoTitle);

    let descriptionEditor = toDoRow.querySelector(".descriptionEditBtn");
    descriptionEditor.addEventListener("click", editToDoDescription);

    let collapseBtn = toDoRow.querySelector(".collapseBtn");
    collapseBtn.addEventListener("click", toggleCollapseExpand);
    toDoContainer.appendChild(toDoRow);

    let separator = new DOMTree(toDoContainer, {
        name: "div",
        class: "toDoSeparator",
    });
});