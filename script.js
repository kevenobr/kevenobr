function printHello() {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "hi";
  document.body.appendChild(newParagraph);
}

const button = document.getElementById("myButton");
button.addEventListener("click", printHello);