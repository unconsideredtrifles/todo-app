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

        let date = currentToDo.getElementsByClassName("dueDate")[0];
        date.classList.toggle("strikedOutDate");
}

function makeContentEditable(e, elementToEdit, toDoID, toDoProp) {
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
        } else if (e.key === "Escape") {
            e.target.removeAttribute("contenteditable");
        }
    })
    elementToEdit.focus();
}

function makeTitleEditable(e) {
    let toDoTopRow = this.parentElement.parentElement;
    let toDoTitle = toDoTopRow.children[0].children[1];
    let toDoID = +toDoTopRow.parentElement.dataset.id;

    makeContentEditable(e, toDoTitle, toDoID, "title");
}

function makeDescriptionEditable(e) {
    let toDoDescription = this.parentElement.children[0]
    let toDo = this.parentElement.parentElement.parentElement
    let toDoID = +toDo.dataset.id;

    makeContentEditable(e, toDoDescription, toDoID, "description");
}

function getToDoToEdit(element) {
    let currentToDoEl = element.parentElement;
    for(let i = 0; i < 2; i++) {
        currentToDoEl = currentToDoEl.parentElement;
    }
    let toDoID = +currentToDoEl.dataset.id;
    return activeProject.getToDo(toDoID);
}

function editToDoDate(e) {
    let toDoToEdit = getToDoToEdit(this);
    toDoToEdit.dueDate = e.target.value;
    console.log(activeProject.getAllToDos());
}

function editToDoPriority(e) {
    let toDoToEdit = getToDoToEdit(this);
    this.classList.remove(toDoToEdit.priority + "Priority");
    toDoToEdit.rotatePriority();

    let newClassName = toDoToEdit.priority + "Priority";
    this.classList.add(newClassName);
    console.log(activeProject.getAllToDos());
}

function deleteToDo(e) {
    let toDoToEdit = getToDoToEdit(this);
    activeProject.removeToDo(toDoToEdit.toDoID);

    let currentToDoEl = this.parentElement;
    for(let i = 0; i < 2; i++) {
        currentToDoEl = currentToDoEl.parentElement;
    }
    
    let separatorToRemove = currentToDoEl.nextElementSibling;
    currentToDoEl.parentElement.removeChild(separatorToRemove);
    currentToDoEl.parentElement.removeChild(currentToDoEl);
    console.log(activeProject.getAllToDos());
}

function toggleCollapseExpand(e) {
    this.classList.toggle("collapseBtnRotate");
    let currentToDo = this.parentElement.parentElement.parentElement;
    let moreInfo = currentToDo.children[1];
    moreInfo.classList.toggle("toDoExpand");
}

function displayToDo(todo) {
    let toDoRow = toDoTemplate.content.cloneNode(true);

    let toDoRowEl = toDoRow.querySelector(".toDoRow");
    toDoRowEl.dataset.id = todo.toDoID;

    let toDoCheckBtn = toDoRowEl.getElementsByClassName("toDoCheckbox")[0];
    toDoCheckBtn.addEventListener("click", markToDoAsFinished);

    let toDoTitle = toDoRowEl.getElementsByClassName("toDoTitle")[0];
    toDoTitle.textContent = todo.title;

    let moreInfo = toDoRowEl.getElementsByClassName("toDoMoreInfo")[0];
    let toDoDescription = moreInfo.getElementsByClassName("toDoDescription")[0];
    let toDoDate = moreInfo.getElementsByClassName("toDoDate")[0];
    toDoDescription.textContent = todo.description;
    toDoDate.addEventListener("input", editToDoDate);
    toDoDate.setAttribute("value", todo.dueDate);

    let titleEditor = toDoRowEl.getElementsByClassName("titleEditBtn")[0];
    titleEditor.addEventListener("click", makeTitleEditable);

    let priorityEditor = toDoRowEl.getElementsByClassName("toDoIcon")[1];
    priorityEditor.addEventListener("click", editToDoPriority);
    priorityEditor.classList.add(todo.priority + "Priority");

    let deleteBtn = toDoRowEl.getElementsByClassName("deleteBtn")[0];
    deleteBtn.addEventListener("click", deleteToDo);

    let descrEditor = toDoRowEl.getElementsByClassName("descriptionEditBtn")[0];
    descrEditor.addEventListener("click", makeDescriptionEditable);

    let collapseBtn = toDoRowEl.getElementsByClassName("collapseBtn")[0];
    collapseBtn.addEventListener("click", toggleCollapseExpand);
    toDoContainer.appendChild(toDoRow);

    let separator = new DOMTree(toDoContainer, {
        name: "div",
        class: "toDoSeparator",
    });
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
let toDoTemplate = document.getElementById("toDoRowTemplate");

allToDos.forEach(displayToDo);