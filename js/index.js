// const { createElement } = require("react");

const today = new Date ();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const body = document.body;

copyright.innerHTML = `\u00A9 Ines Menjivar ${thisYear}`;
footer.appendChild(copyright);
copyright.style.textAlign = "center";

var skills = ["JavaScript", "HTML", "CSS", "GitHub", "Canva"];
console.log("array of skills", skills);

var skillsSection = document.querySelector(".skills");
console.log("skills section", skillsSection);

var skillsList = skillsSection.querySelector("ul");
console.log("skills list here", skillsList);

for(i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");

    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};