import { projectMenu } from "./init/init-menu-sidebar.js";

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