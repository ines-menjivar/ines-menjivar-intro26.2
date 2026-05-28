const today = new Date ();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const body = document.body;

body.append(footer);
copyright.innerHTML = `\u00A9 Ines Menjivar ${thisYear}`;
footer.appendChild(copyright);
copyright.style.textAlign = "center";

var skills = ["JavaScript", "HTML", "CSS", "GitHub", "Canva"];

var skillsSection = document.querySelector(".skills");

var skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");

    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};

/**MY FORM**/
const messageForm = document.querySelector("form[name='leave_message']");

/**MY FORM EVENT LISTENER**/
messageForm.addEventListener("submit", function (event) {

    //preventing the default refreshing behavior of the "submit" event
    event.preventDefault();

    //getting the value entered for each section in the form
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    //selecting the messages section and then the ul inside it to create a new list item
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    //setting the way messages show up on screen, using the information we are collecting from our form
    newMessage.innerHTML = `<a href="mailto:${email}">${name}:</a>
    <span> ${message}</span>`;

    /***REMOVE BUTTON***/
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    removeButton.setAttribute("type", "button");

    /* MY EVENT LISTENER FOR REMOVE BUTTON */
    removeButton.addEventListener("click", function (event){
        const entry = event.target.parentNode;
        entry.remove();
    })
    //adding the remove button to the messages section
    newMessage.append(removeButton);
    //adding the new messages to the list inside the messages ul
    messageList.append(newMessage);

    //reseting the form after the info has been submitted
    event.target.reset();

})


