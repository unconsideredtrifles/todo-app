import { projectTracker, Project, ToDo } from "./todos/todo.js";
import toDoData from "./todos/todo-data.json";

let defaultProject = new Project();
let workProject = new Project("work");

for(let eachToDoArg of toDoData.todos) {
    let eachToDo = new ToDo(...eachToDoArg);
    defaultProject.addToDo(eachToDo);
}

projectTracker.addProject(defaultProject);
projectTracker.addProject(workProject);

let allProjects = projectTracker.getAllProjects();
let projectList = document.createElement("ul");

allProjects.forEach(eachProject => {
    let projectItem = document.createElement("li");
    projectItem.textContent = eachProject.name;
    projectList.appendChild(projectItem);
});


