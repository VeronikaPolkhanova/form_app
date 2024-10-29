import IMask from "imask";
import "./styles/main.scss";
import Register from "./register";

var phoneInput = document.getElementById("phone");
var phoneMask = IMask(phoneInput, {
  mask: "+{375} (00) 000-00-00",
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelectorAll(".error").forEach((error) => {
      error.textContent = "";
    });

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent =
        "Name cannot be empty.";
      isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email.";
      isValid = false;
    }

    const phone = document.getElementById("phone").value.trim();
    if (phone === "" || isNaN(phoneMask.unmaskedValue)) {
      document.getElementById("phoneError").textContent =
        "Please enter a valid phone.";
      isValid = false;
    }

    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("messageError").textContent =
        "Message cannot be empty.";
      isValid = false;
    }

    if (isValid) {
      let formData = new FormData(this);
      formData.set("phone", phoneMask.unmaskedValue);
      Register(formData);
    }
  });

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.onclick = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeModalButton.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
