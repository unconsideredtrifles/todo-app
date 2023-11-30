import {ToDo, Project, projectTracker} from "./todos/todo.js";
import toDoData from "./todos/todo-data.json";


function testNormal() {
    let title = "Grocery";
    let description = "Do a grocery run tomorrow";
    let priority = "medium";
    let td = new ToDo(title, description, priority, "1/2/2021");
    // let td = new ToDo(title, description, priority, "1/12/2014");
    // let td = new ToDo(title, description, priority, "ab/cc/def");
    console.log("output below");
    console.log(td);
    console.log(td.dueDate);
}


function testTracking() {
    let title = "Grocery";
    let description = "Do a grocery run tomorrow";
    let date = "1/2/2021";

    let high = new ToDo(title, description, "high", date);
    let medium = new ToDo(title, description, "medium", date);
    let low = new ToDo(title, description, "low", date);

    let arr = [high, medium, low];

    console.log("output below");
    arr.forEach(each => {
        console.log(each);
    });
}


function testProject() {
    let currentProject = new Project();
    projectTracker.addProject(currentProject);
    for(let toDoArgs of toDoData.todos) {
        let todo = new ToDo(...toDoArgs);
        currentProject.addToDo(todo);
    }
    console.log(currentProject.getAllToDo());

    console.log("Deleting id #2...");
    console.log(currentProject.removeToDo(2));
    console.log(currentProject.getAllToDo());

    console.log("Deleting id #0...");
    console.log(currentProject.removeToDo(0));
    console.log(currentProject.getAllToDo());

    console.log("Deleting id #3...");
    console.log(currentProject.removeToDo(3));
    console.log(currentProject.getAllToDo());


    console.log("Readding items...");
    for(let toDoArgs of toDoData.todos) {
        let todo = new ToDo(...toDoArgs);
        currentProject.addToDo(todo);
    }
    console.log(currentProject.getAllToDos());
    console.log(projectTracker.getAllProjects());
}


function populateData() {
    for(let eachProject in toDoData) {
        let project = new Project(eachProject)
        projectTracker.addProject(project);

        toDoData[eachProject].forEach(eachToDo => {
            let todo = new ToDo(...eachToDo);
            project.addToDo(todo);
        });
    }
}

function depopulateData() {
    for(let eachKey in localStorage) {
        if(localStorage.hasOwnProperty(eachKey)) {
            localStorage.removeItem(eachKey);
        }
    }
}


let test = populateData;
test();