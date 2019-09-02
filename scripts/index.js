const skills = document.getElementById("skill-list");
const newItem = document.createElement("li");
newItem.innerText = "Python";
skills.appendChild(newItem);

//querySelectorAll('.classname').forEach(()=>{})

function submitSomething(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  const list = document.getElementById("list");
  const newItem = document.createElement("li");
  newItem.innerText = input.value;
  list.appendChild(newItem);
}

const someForm = document.querySelector("#the-button");
someForm.addEventListener("submit", submitSomething);
