const skills = document.getElementById("skill-list");
const newItem = document.createElement("li");
newItem.innerText = "Python";
skills.appendChild(newItem);

//querySelectorAll('.classname').forEach(()=>{})

function sendMessage(event) {
  event.preventDefault();
  const data = {};
  const labels = document.querySelectorAll("label");
  labels.forEach(label => {
    label = label.htmlFor;
    data[label] = document.querySelector(`#${label}`).value;
  });
  console.log(data);
}

const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", sendMessage);
