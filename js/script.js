const ModalButton = document.querySelector(".button-open");
const ModalForm = document.querySelector(".search");

ModalButton.onclick = function() {
  ModalForm.classList.toggle('search-off');
}