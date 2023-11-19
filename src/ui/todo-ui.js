import { projectTracker } from "../todos/todo.js";
import {
    makeTitleEditable,
    makeDescriptionEditable,
    editToDoPriority,
    editToDoDate,
    deleteToDo,
} from "../crud/todo-crud.js";
import { DOMTree } from "../misc/util.js";


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


function toggleCollapseExpand(e) {
    this.classList.toggle("collapseBtnRotate");
    let currentToDo = this.parentElement.parentElement.parentElement;
    let moreInfo = currentToDo.children[1];
    moreInfo.classList.toggle("toDoExpand");
}


function displayToDo(todo) {
    let toDoRow = toDoUI.itemTemplate.content.cloneNode(true);

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
    let priorityHoverText = priorityEditor.getElementsByTagName("title")[0];
    priorityHoverText.textContent = todo.priority + " priority";

    let deleteBtn = toDoRowEl.getElementsByClassName("deleteBtn")[0];
    deleteBtn.addEventListener("click", deleteToDo);

    let descrEditor = toDoRowEl.getElementsByClassName("descriptionEditBtn")[0];
    descrEditor.addEventListener("click", makeDescriptionEditable);

    let collapseBtn = toDoRowEl.getElementsByClassName("collapseBtn")[0];
    collapseBtn.addEventListener("click", toggleCollapseExpand);
    toDoUI.container.appendChild(toDoRow);

    let separator = new DOMTree(toDoUI.container, {
        name: "div",
        class: "toDoSeparator",
    });
}


class ToDoUI {
    static activeProject;

    constructor(tracker) {
        this.projectTracker = tracker;
        this.#initContainer();
    }

    #initContainer() {
        this.container = document.getElementById("toDoDisplay");
        this.itemTemplate = document.getElementById("toDoRowTemplate");
    }

    loadToDoItems() {
        ToDoUI.activeProject = this.projectTracker.activeProject;
        let allToDos = ToDoUI.activeProject.getAllToDos();

        allToDos.forEach(displayToDo);
    }

}


class Dialog {
    contructor() {
        this.dialogContainer = document.getElementById("toDoAdderDialog");
        this.#registerOpenBtn();
        this.#registerCloseBtn();
        this.#registerSubmitBtn();
    }

    #registerOpenBtn() {
        let addToDoBtn = document.getElementById("addToDoBtn");
        addToDoBtn.addEventListener("click", e => {
            this.dialogContainer.showModal();
        });
    }

    
    #registerCloseBtn() {
        let dialogCloseBtn = document.getElementById("dialogCloseBtn");
        dialogCloseBtn.addEventListener("click", e => {
            e.preventDefault();
            this.dialogContainer.close();
        });
    }

    #registerSubmitBtn() {
        let submitToDoBtn = document.getElementById("toDoSubmitInput");
        submitToDoBtn.addEventListener("click", e => {
            e.preventDefault();

            let toDoInputs = document.getElementsByClassName("toDoInput");
            let toDoArgs = Array.from(toDoInputs).map(eachInput => {
                return eachInput.value;
            });
            let toDoToAdd = new ToDo(...toDoArgs);
            ToDoUI.activeProject.addToDo(toDoToAdd);
            displayToDo(toDoToAdd);

            this.dialogContainer.close();
        });
    }
}


let toDoUI = new ToDoUI(projectTracker);
let dialog = new Dialog();

export {
    toDoUI,
};