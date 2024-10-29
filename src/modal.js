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
