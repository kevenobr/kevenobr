//hello name//
function greetUser() {
 const nameInput = document
  .getElementById("nameInput");
 const name = nameInput.value;

 const greetingElement = document
  .getElementById("helloArea");
 greetingElement.textContent =
  "hello, " + name + "!";
}

//hamburguer menu//
const hamMenu = document
 .querySelector(".ham-menu");

const offScreenMenu = document
 .querySelector(".off-screen-menu");

hamMenu.addEventListener("click",
 () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle(
   "active");
 });
 
 // colors //
 const changeColorButton = document.getElementById("changeColor");

changeColorButton.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});