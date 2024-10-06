function greetUser() {
 const nameInput = document.getElementById("nameInput");
 const name = nameInput.value;

 const greetingElement = document.getElementById("helloArea");
 greetingElement.textContent = "hello, " + name + "!";
}
