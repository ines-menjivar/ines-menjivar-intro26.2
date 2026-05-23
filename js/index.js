// const { createElement } = require("react");

const today = new Date ();
const thisYear = today.getFullYear();
const footer = document.createElement("footer");
const copyright = document.createElement("p");
const body = document.body;

body.append(footer);
copyright.innerHTML = `\u00A9 Ines Menjivar ${thisYear}`;
footer.appendChild(copyright);
copyright.style.textAlign = "center";

var skills = ["JavaScript", "HTML", "CSS", "GitHub", "Canva"];

var skillsSection = document.querySelector(".skills");

var skillsList = skillsSection.querySelector("ul");

for(i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");

    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};