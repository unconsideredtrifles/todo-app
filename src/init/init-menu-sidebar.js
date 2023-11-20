import { projectTracker, Project, ToDo } from "../todos/todo.js";
import { DOMTree } from "../misc/util.js";
import { toDoUI } from "../ui/todo-ui.js";
import "./style.css";


function getProjectIcon()  {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);
    return iconTemplateNode.querySelector(".projectIcon");
}


class ProjectRenamer {
    constructor(currentName) {
        this.currentName = currentName;
    }

    handleEvent(e) {
        if(editProjectName(e)) {
            projectTracker.renameProject(this.currentName, e.target.textContent);
        }
    }
}


function getProjectBtns() {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);

    let projectBtns = iconTemplateNode.querySelector(".projectBtns");
    let editBtn = projectBtns.getElementsByClassName("projectEditBtn")[0];
    let delBtn = projectBtns.getElementsByClassName("projectDelBtn")[0];

    editBtn.addEventListener("click", function() {
        let projectItem = this.parentElement.parentElement;

        let className = "projectItemText";
        let projectItemText = projectItem.getElementsByClassName(className)[0];

        projectItemText.setAttribute("contenteditable", true);

        let projectRenamer = new ProjectRenamer(projectItemText.textContent);
        projectItemText.addEventListener("keydown", projectRenamer);
        projectItemText.focus();
    });

    delBtn.addEventListener("click", function() {
        let projectItem = this.parentElement.parentElement;
        let itemText = projectItem.getElementsByClassName("projectItemText")[0];
        projectTracker.removeProject(itemText.textContent);

        projectItem.parentElement.removeChild(projectItem);
        toDoUI.loadToDoItems();

        console.log(projectTracker.getAllProjects());
    });

    return projectBtns;
}


function cancelNameAddBox(e) {
    let menuList = e.target.parentElement.parentElement;
    let menuListItem = e.target.parentElement;
    menuList.removeChild(menuListItem);
}


function setCurrentProject(e) {
    let projectName = this.getElementsByClassName("projectItemText")[0];
    projectTracker.activeProject = projectName.textContent;
    toDoUI.loadToDoItems();
}


function editProjectName(e) {
    if(!(e.ctrlKey) && !(["Backspace", "Enter"].includes(e.key))
            && e.target.textContent.length >= 20) {
        e.preventDefault();
    }

    if(e.key === "Enter") {
        e.target.removeAttribute("contenteditable");
        e.target.parentElement.style.backgroundColor = "";
        return true;
    }

    if(e.key === "Escape") {
        cancelNameAddBox(e);
    }
}


function addProjectItem(e) {
    if(editProjectName(e)) {
        let projectToAdd = new Project(this.textContent);
        projectTracker.addProject(projectToAdd);
    }
}


function initProjectItem() {
    let projectItem = new DOMTree(menuItemList.getRootElement(), {
        name: "li",
        class: "projectItem",
        listener: ["click", setCurrentProject],
    });
    projectItem.getRootElement().style.backgroundColor = "#d8d8d8";
    projectItem.addChild(getProjectIcon());

    let projectNameAddBox = document.createElement("span");
    projectNameAddBox.classList.add("projectItemText");
    projectNameAddBox.setAttribute("contenteditable", "true");
    projectNameAddBox.setAttribute("spellcheck", "false");
    projectNameAddBox.addEventListener("keydown", addProjectItem);
    projectItem.addChild(projectNameAddBox);
    projectItem.addChild(getProjectBtns());

    projectNameAddBox.focus();
}


let projectMenu = document.createElement("div");
projectMenu.classList.add("projectMenu");

let menuHeader = new DOMTree(projectMenu, {
    name: "div",
    class: "projectMenuHeader",
});

menuHeader.addElements([
    { 
        name: "button", 
        class: "projectMenuHeaderBtn",
        content: "+",
        listener: ["click", initProjectItem],
    },
    {
        name: "div",
        class: "projectMenuHeaderText",
        content: "Projects",
    }
]);

let menuSeparator = new DOMTree(projectMenu, {
    name: "div",
    class: "projectMenuSeparator"
});

let menuItemList = new DOMTree(projectMenu, {
    name: "ul",
    class: "projectMenuList",
});

let allProjects = projectTracker.getAllProjects();
allProjects.forEach(eachProject => {
    let menuItem = new DOMTree(menuItemList.getRootElement(), {
        name: "li",
        class: "projectItem",
        listener: ["click", setCurrentProject],
    });
    menuItem.addChild(getProjectIcon());
    menuItem.addElements([
        {
            name: "span",
            class: "projectItemText",
            content: eachProject.name,
        }
    ]);
    menuItem.addChild(getProjectBtns());
});


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
});

document.body.appendChild(projectMenu);