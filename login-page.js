const emailinput = document.querySelector(".email");
const emailerrormessage = document.querySelector("#erroreEmail");

emailinput.addEventListener("focusout", validateEmail);

function validateEmail(event) {
  const email = event.target.value;

  if (!email) {
    emailinput.classList.add("error");
    emailerrormessage.classList.remove("invisible");
  } else {
    emailinput.classList.remove("error");
    emailerrormessage.classList.add("invisible");
  }
}
