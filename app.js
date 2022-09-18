const input = document.querySelector("input");
const button = document.querySelector("button");
const textCard = document.querySelector(".text-card");

button.addEventListener("click", ValidateEmail);

function ValidateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    alert("Valid email address!");
  } else {
    // alert("Invalid email address!");
    input.classList.add("error");
    textCard.classList.add("error");
  }
}
