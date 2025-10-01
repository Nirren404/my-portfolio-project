// *  1 Welcome Message (Strings + Variables)
const myName = "Nirari Yaro";
const myRole = "Frontend Developer";

const welcomeMessage = document.getElementById("welcome-msg");

welcomeMessage.textContent = `Welcome to ${myName}'s Portfolio!. I'm a ${myRole} passionate about creating engaging and user-friendly web experiences. Explore my projects and get to know more about me!`;

// *  2 Skills List (Arrays + Loops)
const skills = [
  { name: "HTML", level: "Intermediate (3 Years)" },
  { name: "CSS", level: "Intermediate (3 Years)" },
  { name: "JavaScript", level: "Beginner (1 Year)" },
  { name: "Python", level: "Beginner (Half Year)" },
  { name: "Network Engineering", level: "Intermediate (3 Years)" },
  { name: "Communication Skills", level: "Advanced" },
  { name: "Problem-Solving", level: "Advanced" },
  { name: "Team Collaboration", level: "Advanced" },
];

const table = document.querySelector("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "Skill";
const levelHeader = document.createElement("th");
levelHeader.textContent = "Level";

headerRow.appendChild(nameHeader);
headerRow.appendChild(levelHeader);
thead.appendChild(headerRow);

for (const skill of skills) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = skill.name;
  const levelCell = document.createElement("td");
  levelCell.textContent = skill.level;

  row.appendChild(nameCell);
  row.appendChild(levelCell);
  tbody.appendChild(row);
}

// *  3 About Me Section (Objects + Strings)

const aboutmeContact = {
  name: "Nirari Yaro",
  age: 19,
  location: "Stockholm",
};
const cardcontact = document.querySelector(".about-section");
const aboutMeParagraph = document.getElementById("about-meContact");
function generateAboutMeText(contact) {
  aboutMeParagraph.textContent = `My name is ${aboutmeContact.name},
    I am ${aboutmeContact.age} years old and I live in ${aboutmeContact.location}.`;
}

generateAboutMeText(aboutmeContact);
aboutMeParagraph.style.fontFamily = "nunito";
aboutMeParagraph.style.textAlign = "center";

// *  4 Contact Form Feedback (Functions + DOM)
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const feedback = document.getElementById("form-feedback");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target.name.value);
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === ""
  ) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = `Thank you ${event.target.name.value} for getting in touch! We will get back to you asap!`;

  setTimeout(() => {
    feedback.textContent = "";
    feedback.style.color = "black";
    form.reset();
  }, 3000);
});
