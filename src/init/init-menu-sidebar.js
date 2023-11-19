import { projectTracker, Project, ToDo } from "../todos/todo.js";
import { DOMTree } from "../misc/util.js";
import { toDoUI } from "../ui/todo-ui.js";
import "./style.css";


function getProjectIcon()  {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);
    return iconTemplateNode.querySelector(".projectIcon");
}


function cancelNameAddBox(e) {
    let menuList = e.target.parentElement.parentElement;
    let menuListItem = e.target.parentElement;
    menuList.removeChild(menuListItem);
}


function setProjectName(e) {
    if(!(e.ctrlKey) && !(["Backspace", "Enter"].includes(e.key))
            && e.target.textContent.length >= 20) {
        e.preventDefault();
    }

    if(e.key === "Enter") {
        e.target.removeAttribute("contenteditable");
        let projectToAdd = new Project(e.target.textContent);
        projectTracker.addProject(projectToAdd);
        e.target.parentElement.style.backgroundColor = "";
    }

    if(e.key === "Escape") {
        cancelNameAddBox(e);
    }
}


function addProjectItem() {
    let projectItem = new DOMTree(menuItemList.getRootElement(), {
        name: "li",
        class: "projectItem"
    });
    projectItem.getRootElement().style.backgroundColor = "#d8d8d8";
    projectItem.addChild(getProjectIcon());

    let projectNameAddBox = document.createElement("span");
    projectNameAddBox.classList.add("projectItemText");
    projectNameAddBox.setAttribute("contenteditable", "true");
    projectNameAddBox.setAttribute("spellcheck", "false");
    projectNameAddBox.addEventListener("keydown", setProjectName);
    projectItem.addChild(projectNameAddBox);
    projectNameAddBox.focus();
}


function setCurrentProject(e) {
    let projectName = this.getElementsByClassName("projectItemText")[0];
    projectTracker.activeProject = projectName.textContent;
    toDoUI.loadToDoItems();
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
        listener: ["click", addProjectItem],
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