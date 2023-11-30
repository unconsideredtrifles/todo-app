import { projectTracker, Project, ToDo } from "../todos/todo.js";
import { DOMTree } from "../misc/util.js";
import { toDoUI } from "./todo-ui.js";
import "./style.css";


function getProjectIcon()  {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);
    return iconTemplateNode.querySelector(".projectIcon");
}


function getProjectBtns() {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);

    let projectBtns = iconTemplateNode.querySelector(".projectBtns");
    let editBtn = projectBtns.getElementsByClassName("projectEditBtn")[0];
    let delBtn = projectBtns.getElementsByClassName("projectDelBtn")[0];

    editBtn.addEventListener("click", function(e) {
        let projectItem = this.parentElement.parentElement;

        let className = "projectItemText";
        let projectItemText = projectItem.getElementsByClassName(className)[0];

        projectItemText.setAttribute("contenteditable", true);

        let projectRenamer = new ProjectRenamer(projectItemText);
        projectItemText.addEventListener("keydown", projectRenamer);
        projectItemText.focus();

        e.stopPropagation();
    });

    delBtn.addEventListener("click", function(e) {
        let projectItem = this.parentElement.parentElement;
        let itemText = projectItem.getElementsByClassName("projectItemText")[0];
        projectTracker.removeProject(itemText.textContent);

        let itemList = projectItem.parentElement;
        itemList.removeChild(projectItem);
        toDoUI.loadToDoItems();

        let totalProjects = projectTracker.getAllProjects().length;
        if(totalProjects === 1) {
            setActiveProjectDirect(itemList.children[0]);
        }

        e.stopPropagation();
    });

    return [
        projectBtns,
        editBtn,
        delBtn,
    ];
}


function limitInput(e) {
    if(!(e.ctrlKey) && !(["Backspace", "Enter"].includes(e.key))
            && e.target.textContent.length >= 20) {
        e.preventDefault();
    }
}


class ProjectRenamer {
    constructor(projectNameEl) {
        this.projectNameEl = projectNameEl;
        this.exitRenameCallback = this.exitRenaming.bind(this);
        this.projectNameEl.addEventListener("blur", this.exitRenameCallback, {once: true});

        this.oldName = this.projectNameEl.textContent;
    }

    handleEvent(e) {
        limitInput(e);
        if(e.key === "Escape") {
            this.exitRenaming();
            return;
        }

        if(e.key === "Enter") {
            e.target.removeEventListener("blur", this.exitRenameCallback);
            e.target.removeEventListener("keydown", this);
            this.projectNameEl.removeAttribute("contenteditable");
            projectTracker.renameProject(this.oldName, e.target.textContent);
        }
    }

    exitRenaming() {
        this.projectNameEl.removeEventListener("keydown", this);
        this.projectNameEl.textContent = this.oldName;
        this.projectNameEl.removeAttribute("contenteditable");
    }
}


function addProjectItem(e) {
    limitInput(e);
    if(e.key === "Escape") {
        e.target.removeAttribute("contenteditable");
        return;
    }

    if(e.key === "Enter") {
        e.target.removeEventListener("keydown", addProjectItem);
        e.target.removeEventListener("blur", cancelNameAddBox);
        e.target.removeAttribute("contenteditable");
        e.target.parentElement.style.backgroundColor = "";
        let projectToAdd = new Project(this.textContent);
        projectTracker.addProject(projectToAdd);

        let totalProjects = projectTracker.getAllProjects().length;
        if(totalProjects === 1) {
            setActiveProjectDirect(this.parentElement);
        }
    } 
}


function cancelNameAddBox(e) {
    let menuList = e.target.parentElement.parentElement;
    let menuListItem = e.target.parentElement;
    menuList.removeChild(menuListItem);
}


function initProjectItem() {
    let projectItem = new DOMTree(menuItemList.getRootElement(), {
        name: "li",
        classes: ["projectItem"],
        listener: ["click", setActiveProject],
    });
    projectItem.getRootElement().style.backgroundColor = "#d8d8d8";
    projectItem.addChild(getProjectIcon());

    let projectNameAddBox = document.createElement("span");
    projectNameAddBox.classList.add("projectItemText");
    projectNameAddBox.setAttribute("contenteditable", "true");
    projectNameAddBox.setAttribute("spellcheck", "false");
    projectNameAddBox.addEventListener("keydown", addProjectItem);
    projectNameAddBox.addEventListener("blur", cancelNameAddBox);
    projectItem.addChild(projectNameAddBox);
    projectItem.addChild(getProjectBtns()[0]);

    projectNameAddBox.focus();
}

function setActiveProjectDirect(targetElement) {
    setActiveProject.call(targetElement);
}

function setActiveProject(e) {
    let projectName = this.getElementsByClassName("projectItemText")[0];
    let projectItemList = this.parentElement.parentElement;

    let activeItem = projectItemList.getElementsByClassName("activeProjectItem")[0];
    if(activeItem) {
        let activeIcons = activeItem.getElementsByClassName("activeProjectIcon");
        activeItem.classList.remove("activeProjectItem");
        Array.from(activeIcons).forEach(eachIcon => {
            eachIcon.classList.remove("activeProjectIcon");
        });
    }

    let projectIcon = this.getElementsByClassName("projectIcon")[0];
    let editBtn = this.getElementsByClassName("projectEditBtn")[0];
    let delBtn = this.getElementsByClassName("projectDelBtn")[0];
    projectIcon.classList.add("activeProjectIcon");
    editBtn.classList.add("activeProjectIcon");
    delBtn.classList.add("activeProjectIcon");
    this.classList.add("activeProjectItem");

    projectTracker.activeProject = projectName.textContent;
    toDoUI.loadToDoItems();
}


let projectMenu = document.createElement("div");
projectMenu.classList.add("projectMenu");

let menuHeader = new DOMTree(projectMenu, {
    name: "div",
    classes: ["projectMenuHeader"],
});

menuHeader.addElements([
    { 
        name: "button", 
        classes: ["projectMenuHeaderBtn"],
        content: "+",
        listener: ["click", initProjectItem],
    },
    {
        name: "div",
        classes: ["projectMenuHeaderText"],
        content: "Projects",
    }
]);

let menuSeparator = new DOMTree(projectMenu, {
    name: "div",
    classes: ["projectMenuSeparator"],
});

let menuItemList = new DOMTree(projectMenu, {
    name: "ul",
    classes: ["projectMenuList"],
});


let allProjects = projectTracker.getAllProjects();
allProjects.forEach(eachProject => {
    let activeProjectPresence;
    let activeProject = projectTracker.activeProject
    if(activeProject && activeProject.name === eachProject.name) {
        activeProjectPresence = true;
    } else {
        activeProjectPresence = false;
    }

    let menuItemClasses = ["projectItem"];
    if(activeProjectPresence) {
        menuItemClasses.push("activeProjectItem");
    }
    let menuItem = new DOMTree(menuItemList.getRootElement(), {
        name: "li",
        classes: menuItemClasses,
        listener: ["click", setActiveProject],
    });

    let projectIcon = getProjectIcon();
    if(activeProjectPresence) {
        projectIcon.classList.add("activeProjectIcon");
    }
    menuItem.addChild(projectIcon);

    menuItem.addElements([
        {
            name: "span",
            classes: ["projectItemText"],
            content: eachProject.name,
        }
    ]);

    let [projectBtns, editBtn, delBtn] = getProjectBtns();
    if(activeProjectPresence) {
        editBtn.classList.add("activeProjectIcon");
        delBtn.classList.add("activeProjectIcon");
    }
    menuItem.addChild(projectBtns);
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