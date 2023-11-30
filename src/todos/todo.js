import {
    ToDoDate, 
    DateValidator,
} from "../dates/date.js";


class ProjectTracker {
    #allProjects;
    #currentProject;

    constructor(allProjects = []) {
        this.#allProjects = allProjects;
    }

    getAllProjects() {
        return this.#allProjects;
    }

    addProject(project) {
        if(this.isDuplicateProject(project)) {
            return;
        }
        this.#allProjects.push(project);
        ToDoSaver.saveProject(project);

        if(this.#allProjects.length === 1) {
            this.#currentProject = project;
            localStorage.setItem("activeProject", project.name);
        }
    }

    renameProject(currentName, newName) {
        let proj = this.#allProjects.find(eachProject => {
            return eachProject.name === currentName;
        });
        if(proj) {
            if(this.activeProject && this.activeProject.name === currentName) {
                localStorage.setItem("activeProject", newName);
            }
            proj.name = newName;
            proj.getAllToDos().forEach(eachToDo => {
                eachToDo.parentProjectName =  proj.name;
            });

            let projStorage = localStorage.getItem(currentName);
            let projInfo = JSON.parse(projStorage);
            projInfo.name = newName;
            localStorage.setItem(newName, JSON.stringify(projInfo));

            localStorage.removeItem(currentName);
        } else {
            throw new Error(`Can't rename Project '${currentName}' ` +
                            `since it doesn't exist`);
        }
    }

    removeProject(projectName) {
        let idx2Delete = this.#allProjects.findIndex(eachProject => 
            eachProject.name === projectName
        );
        this.#allProjects.splice(idx2Delete, 1);
        localStorage.removeItem(projectName);

        if(this.activeProject && projectName === this.activeProject.name) {
            if(this.#allProjects.length === 1) {
                this.#currentProject = this.#allProjects[0];
                localStorage.setItem("activeProject", this.#currentProject.name);
            } else {
                this.#currentProject = undefined;
                localStorage.setItem("activeProject", "");
            }
        }
    }

    get activeProject() {
        return this.#currentProject;
    }

    set activeProject(projectName) {
        if(projectName === undefined) {
            this.#currentProject = undefined;
            return;
        }

        localStorage.setItem("activeProject", projectName);
        for(let eachProject of this.#allProjects) {
            if(eachProject.name === projectName) {
                this.#currentProject = eachProject;
                break;
            }
        }
    }

    isDuplicateProject(project) {
        return this.#allProjects.some(eachProject => 
            eachProject.name === project.name
        );
    }
}


class Project {
    constructor(name = "default", toDoArr = []) {
        this.name = name;
        this.toDoArr = toDoArr;
    }

    addToDo(toDo) {
        if(this.isDuplicateToDo(toDo)) {
            throw new Error("Don't try to add a duplicate todo");
        }
        this.toDoArr.push(toDo);

        let toDoSaver = new ToDoSaver(toDo, this.name);
        toDoSaver.addToDo();
        toDoSaver.save();
        toDo.parentProjectName = this.name;
    }

    isDuplicateToDo(toDo) {
        return this.toDoArr.some(eachToDo => {
            let titleEquality = eachToDo.title === toDo.title;
            let descrEquality = eachToDo.description === toDo.description;
            let priorityEquality = eachToDo.priority === toDo.priority;
            let dueDateEquality = eachToDo.dueDate === toDo.dueDate;

            return (titleEquality && descrEquality && 
                priorityEquality && dueDateEquality);
        })
    }

    getToDo(toDoID) {
        return this.toDoArr.find(eachToDo => {
            return eachToDo.toDoID === toDoID;
        });
    }

    getAllToDos() {
        return this.toDoArr;
    }

    toggleFinish(toDoID) {
        let todo = this.getToDo(toDoID);
        if(todo.finished) {
            todo.finished = false;
        } else {
            todo.finished = true;
        }

        let toDoSaver = new ToDoSaver(todo, this.name);
        toDoSaver.updateToDo();
        toDoSaver.save();
    }

    removeToDo(toDoID) {
        let idx2Delete = this.toDoArr.findIndex(
            eachToDo => eachToDo.toDoID === toDoID
        );
        this.toDoArr.splice(idx2Delete, 1);

        let toDoSaver = new ToDoSaver({}, this.name);
        toDoSaver.removeToDo(idx2Delete);
        toDoSaver.save();
    }
}


class ToDo {
    static priorities = ["low", "medium", "high"];
    static nextToDoID = 0;
    #title;
    #description;
    #priority;
    #dueDate;
    #finished
    #parentProjectName;

    constructor(title, description, priority, dueDate) {
        this.toDoID = ToDo.nextToDoID++;
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        ToDo.validateDate(dueDate);
        this.#dueDate = new ToDoDate(dueDate);
        this.#finished = false;
    }

    get parentProjectName() {
        return this.#parentProjectName;
    }

    set parentProjectName(projectName) {
        this.#parentProjectName = projectName;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("title", value);
        toDoSaver.save();

        this.#title = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("description", value);
        toDoSaver.save();
        this.#description = value;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        if(!ToDo.priorities.includes(value)) {
            throw new Error("priority must be one of low, medium and high");
            return;
        }
        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("priority", value);
        toDoSaver.save();

        this.#priority = value;
    }

    rotatePriority() {
        let priorityIdx = ToDo.priorities.indexOf(this.priority);
        priorityIdx++
        if(priorityIdx >= ToDo.priorities.length) {
            priorityIdx = 0;
        }
        this.priority = ToDo.priorities[priorityIdx];
    }

    get dueDate() {
        return this.#dueDate.getDateStr();
    }

    set dueDate(dueDate) {
        ToDo.validateDate(dueDate);
        let toDoDate = new ToDoDate(dueDate);

        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("dueDate", toDoDate.getDateStr());
        toDoSaver.save();

        this.#dueDate = toDoDate;
    }

    static validateDate(dueDate) {
        let dateValidator = new DateValidator(dueDate);
        return dateValidator.validate();
    }

    get finished() {
        return this.#finished;
    }

    set finished(value) {
        let toDoSaver = new ToDoSaver(this, this.#parentProjectName);
        toDoSaver.updateToDo("finished", value);
        toDoSaver.save();

        this.#finished = value;
    }
}


class ToDoSaver {
    constructor(toDoObj, projectName) {
        this.toDoInfo = {
            title: toDoObj.title,
            description: toDoObj.description,
            priority: toDoObj.priority,
            dueDate: toDoObj.dueDate,
            finished: toDoObj.finished
        };
        this.projectInfo = ToDoSaver.getProjectInfo(projectName);
    }

    static getProjectInfo(projectName) {
        return JSON.parse(localStorage.getItem(projectName));
    }

    getToDoIdx() {
        return this.projectInfo.toDoArr.findIndex(eachToDo => {
            return (
                eachToDo.title === this.toDoInfo.title &&
                eachToDo.description === this.toDoInfo.description &&
                eachToDo.priority === this.toDoInfo.priority &&
                eachToDo.dueDate === this.toDoInfo.dueDate
            )
        });

    }

    addToDo() {
        this.projectInfo.toDoArr.push(this.toDoInfo);
    }

    removeToDo(idxToRemove) {
        this.projectInfo.toDoArr.splice(idxToRemove, 1);
    }

    updateToDo(prop, value) {
        let idxToUpdate = this.getToDoIdx();
        this.toDoInfo[prop] = value;
        this.projectInfo.toDoArr[idxToUpdate] = this.toDoInfo;
    }

    save() {
        localStorage.setItem(this.projectInfo.name, JSON.stringify(this.projectInfo));
    }

    static saveProject(project) {
        let projectInfo = {};
        projectInfo.name = project.name;
        projectInfo.toDoArr = project.toDoArr.map(eachToDo => {
            let toDoSaver = new ToDoSaver(eachToDo);
            return toDoSaver.toDoInfo;
        });
        localStorage.setItem(projectInfo.name, JSON.stringify(projectInfo));
    }

    static openProject(projectName) {
        let projectInfo = ToDoSaver.getProjectInfo(projectName);
        let toDos = projectInfo.toDoArr.map(eachToDo => {
            let toDo = new ToDo(
                eachToDo.title,
                eachToDo.description,
                eachToDo.priority,
                eachToDo.dueDate
            );
            toDo.parentProjectName = projectInfo.name;
            toDo.finished = eachToDo.finished
            return toDo;
        });
        return new Project(projectInfo.name, toDos);
    }
}


let projectTracker = new ProjectTracker();
let activeProjectName;
for(let eachKey in localStorage) {
    if(localStorage.hasOwnProperty(eachKey)) {
        if(eachKey === "activeProject") {
            activeProjectName = localStorage.getItem(eachKey);
            if(!activeProjectName) {
                activeProjectName = undefined;
            }
        } else {
            let project = ToDoSaver.openProject(eachKey);
            projectTracker.addProject(project);
        }
     }
}

if(activeProjectName) {
    projectTracker.activeProject = activeProjectName;
}

export {
    ToDo,
    Project,
    projectTracker,
};